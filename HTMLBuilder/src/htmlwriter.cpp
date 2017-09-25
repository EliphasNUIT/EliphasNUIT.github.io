#include "htmlwriter.h"
#include <QStringListIterator>

#include <QDebug>
#include <QDir>
#include <QFile>

///////////////////////

void writeIndexHeader(QTextStream& stream) {
    QStringList res;

    res << "<!DOCTYPE html>";
    res << "<html>";
    res << "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>";
    res << "<script>";   
    res << "$(function(){";
    res << "    $(\"#includedContent\").load(\"./ressources/header.html\");";
    res << "});";
    res << "</script>";    
    res << "<head>";
    res << "    <meta charset=\"utf-8\">";
    res << "    <title>[ODS] GW2 Logs</title>";
    res << "    <meta name=\"author\" content=\"EliphasNUIT\">";
    res << "    <link href=\"styles/html.css\" rel=\"stylesheet\" type=\"text/css\"> ";
    res << "</head>";
    res << "<div id=\"includedContent\"></div>";
    res << "<body>";
    res << "    <h1>Logs [ODS]</h1>";
    res << "    <img src=\"images/raid.jpg\">";

    QStringListIterator it(res);
    while(it.hasNext()) {
        stream << it.next() << endl;
    }

}

void writeIndexFoot(QTextStream& stream) {
    QStringList res;

    //res << "    <iframe src=\"https://calendar.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;hl=fr&amp;bgcolor=%23AAAAAA&amp;src=vaqf4oa6gmj6saabljhjiti5cs%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=Europe%2FParis\" style=\"border-width:0\" width=\"700\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>";
    res << QString::fromLatin1("    <p>Tous les logs ont été créés par <a href=\"https://www.deltaconnected.com/arcdps/\">ArcDPS</a> et parsés par <a href=\"https://raidheroes.tk/\">Raid Heroes</a>.</p>");
    res << "</body>";
    res << " </html>";

    QStringListIterator it(res);
    while(it.hasNext()) {
        stream << it.next() << endl;
    }

}

//////////////////////

HtmlWriter::HtmlWriter(QObject *parent) : QObject(parent)
{
}

HtmlWriter::~HtmlWriter() {
    for (int i = 0; i < this->raidList.length(); i++) {
        delete this->raidList[i];
    }
    this->raidList.clear();
}

void HtmlWriter::removeOld() {
    QString path = "../../logs/";
    QDir dir(path);
    dir.setNameFilters(QStringList() << "*.html*");
    dir.setFilter(QDir::Files);
    foreach(QString dirFile, dir.entryList())
    {
        qInfo() << "removing " + dirFile;
        dir.remove(dirFile);
    }

    path = "../../";
    QDir dir2(path);
    dir2.setNameFilters(QStringList() << "*.html*");
    dir2.setFilter(QDir::Files);
    foreach(QString dirFile, dir2.entryList())
    {
        qInfo() << "removing " + dirFile;
        dir2.remove(dirFile);
    }
}

void HtmlWriter::execute(){

    qInfo() << "removing old files";
    this->removeOld();
    qInfo() << "old files removed";

    // read ressources
    QFile xmlFile("../../ressources/raidInfos.xml");
    if(xmlFile.open(QIODevice::ReadOnly)) {
        qInfo() << "opened xml";
        QXmlStreamReader reader(&xmlFile);
        if (reader.readNextStartElement()) {
            if (reader.name() == "raid_info") {
                this->read(reader);
            }
        }else {
            reader.raiseError(QObject::tr("Incorrect file"));
        }
    } else {
        qInfo() << "file not found";
    }
    xmlFile.close();

    // open index file
    QFile indexFile("../../index.html");
    if (!indexFile.open(QIODevice::ReadWrite)) {
        abort();
    }
    QTextStream stream(&indexFile);

    writeIndexHeader(stream);
    for (int i = 0; i < this->raidList.length(); i++) {
        this->raidList[i]->generateHTMLs(stream);
    }
    writeIndexFoot(stream);
    indexFile.close();
}

void HtmlWriter::read(QXmlStreamReader& reader){
    while (reader.readNextStartElement()) {
        if (reader.name() == "raid") {
            QString raidName = reader.attributes().value("name").toString();
            Raid* raid = new Raid(raidName,0);
            this->raidList << raid;
            raid->read(reader);
        }
    }
    qInfo() << endl;
}
