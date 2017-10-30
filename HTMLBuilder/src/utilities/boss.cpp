#include "boss.h"

#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QDebug>
#include <QStringListIterator>
#include <QDate>
#include <QDateTime>
#include <JlCompress.h>

Boss::Boss(const QString& name,QObject *parent) : QObject(parent)
{
    this->name = name;
}

void Boss::generateHTMLs(QTextStream& streamIndex){
    qInfo() << "        treating " + this->name;

    streamIndex << "        <li> <a href=\"./logs/" + this->shortRef + ".html\">" + this->name + "</a> </li>" << endl;

    QStringList res;
    QFile htmlFile(this->htmlFile);

    res << "<!DOCTYPE html>";
    res <<"<html>";
    res << "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>";
    res << "<script src=\"../scripts/display.js\"></script>";
    res << "<script>";
    res << "$(function(){";
    res << "    $(\"#includedContent\").load(\"../ressources/header.html\");";
    res << "});";
    res << "</script>";
    res << "<head>";
    res << "    <meta charset=\"utf-8\">";
    res << "    <title>[ODS] " + this->name + " Logs</title>";
    res << "    <meta name=\"author\" content=\"EliphasNUIT\">";
    res << "    <link href=\"../styles/html.css\" rel=\"stylesheet\" type=\"text/css\">";
    res << "    <link href=\"../styles/bosses.css\" rel=\"stylesheet\" type=\"text/css\">";
    res << "    <style media=\"screen\" type=\"text/css\">";
    
    res << "html {";
    res << "    background-image: url("+this->background+") ;";
    res << "}";
    
    res << "    </style>";
    res << "</head>";
    res << "<div id=\"includedContent\"></div>";
    res << "<body>";
    res << "    <h1>" + this->name + " [ODS]</h1>";
    res << this->imagePath;
    res << "    <p>Les try</p> ";
    res << "        <ul> ";
    res << this->getTries();
    res << "        </ul>";

    res << QString::fromLatin1("    <p>Tous les logs ont été créés par <a href=\"https://www.deltaconnected.com/arcdps/\">ArcDPS</a> et parsés par <a href=\"https://raidheroes.tk/\">Raid Heroes</a>.</p>");
    res << QString::fromLatin1("<div licensing>This unofficial site includes art and other assets that are © 2015 ArenaNet, Inc. All rights reserved. All other trademarks are the property of their respective owners.</div>");
    res << "</body>";
    res <<"</html>";

    QStringListIterator it(res);

    if (htmlFile.open(QIODevice::ReadWrite)) {
        QTextStream stream(&htmlFile);
        while(it.hasNext()) {
            stream << it.next() << endl;
        }
    }
    htmlFile.close();

    qInfo() << "        treated " +this->name;  ;
}

inline QString toDate(const QString& date) {
    return QDate::fromString(date,"yyyy_MM_dd").toString("dd/MM/yyyy");
}

QStringList Boss::getTries() {
    QDir triesDir(this->ressourcePath);
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList toMove;
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        // Auto archive
        QFileInfo info(this->ressourcePath+ '/' + aux);
        qint64 fileTime = QDateTime::currentSecsSinceEpoch() - info.lastModified().toSecsSinceEpoch();
        if ( fileTime > qint64(1814400)) {
            toMove << this->ressourcePath+ '/' + aux;
            qInfo() << aux + " archived";
            continue;
        }
        //
        QString date = aux.split("-").at(0);
        date.insert(4,"_");
        date.insert(7,"_");
        const QString path = this->ressourceDir + aux;
        const QString iFrameName = "#" + date;
        const QString displayName = "display(\'"+iFrameName+"\')";
        res << "            <li> <button onclick=\""+displayName+"\"> Afficher les logs du " + toDate(date) + "</button> </li>";
        res << "            <iframe id=\"" + date + "\" data-src="+path+"\" width=\"0\" height=\"0\" src=\"about:blank\" frameborder=\"0\"> </iframe>";
    }
    QStringListIterator it2(toMove);
    while(it2.hasNext()) {
        QString aux(it2.next());
        QFileInfo info(aux);
        QFile file(aux);
        QString path = info.absoluteFilePath();
        JlCompress::compressFile("../../ressources/test.zip",path);
        //JlCompress::compressFile(path,"../../ressources/test.zip");path.replace(this->shortRef+"/","");
        //file.rename(path);
    }
    return res;
}

void Boss::read(QXmlStreamReader& reader) {
    qInfo() << "        reading " + this->name ;
    QString image, shortRef, bg;
    while (reader.readNextStartElement()) {
        if (reader.name() == "image") {
            image = reader.readElementText();
        } else if (reader.name() == "shortRef") {
            shortRef = reader.readElementText();
        } else if (reader.name() == "bg") {
            bg = reader.readElementText();
        }  else {
            reader.skipCurrentElement();
        }
    }
    qInfo() << "        read " + this->name ;
    this->shortRef = shortRef;
    this->imagePath = "<img src=\"../images/bosses/" + image + "\">";
    this->htmlFile = "../../logs/" + shortRef + ".html";
    this->ressourceDir = "\"../ressources/" + shortRef + "/";
    this->ressourcePath = "../../ressources/" + shortRef;
    this->background = "../images/raids/" + bg;
}


