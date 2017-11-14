#include "boss.h"

#include <QDir>
#include <QFile>
#include <QTextStream>
#include <QFileInfo>
#include <QDebug>
#include <QString>
#include <QStringListIterator>
#include <QDate>
#include <QDateTime>

#include <quazip.h>
#include <quazipfile.h>

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
    res << "<script src='../scripts/display.js'></script>";
    res << "<script>";
    res << "window.onload = function () {";
    res << "   loadHTML('includedContent', 'https://eliphasnuit.github.io/ressources/header.html');";
    res << "};";
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

bool writeInZipPath(QString& pathToZip, QString& name, const QString& toWrite)
{
    QuaZip zip(pathToZip);
    if (!zip.open(QuaZip::mdAdd)) {
        qInfo() << "Error!";
        return false;
    }
    QuaZipFile zfile(&zip);
    zfile.open(QIODevice::WriteOnly, QuaZipNewInfo(name));
    QTextStream out(&zfile);
    out << toWrite.toLatin1();
    return true;
}

QStringList Boss::getTries() {
    QDir triesDir(this->ressourcePath);
    triesDir.setNameFilters(QStringList() << "*.html*");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList toMove;
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString name(it.next());
        if (!name.contains("_" + this->shortRef)) {
            continue;
        }
        //
        QString date = name.split("-").at(0);
        date.insert(4,"_");
        date.insert(7,"_");
        QDate qDate = QDate::fromString(date,"yyyy_MM_dd");
        qint64 fileTime = QDateTime::currentSecsSinceEpoch() - QDateTime(qDate).toSecsSinceEpoch();
        if ( fileTime > qint64(1814400)) {
            toMove << name;
            qInfo() << name + " archived";
            continue;
        }
        const QString path = this->ressourceDir + name;
        const QString iFrameName = date;
        const QString displayName = "display(\'"+iFrameName+"\')";
        res << "            <li> <button onclick=\""+displayName+"\"> Afficher les logs du " + qDate.toString("dd/MM/yyyy") + "</button> </li>";
        res << "            <iframe id=\"" + date + "\" data-src="+path+"\" width=\"0\" height=\"0\" src=\"about:blank\" frameborder=\"0\" style=\"display:none\"> </iframe>";
    }

    QStringListIterator it2(toMove);
    while(it2.hasNext()) {
        QString name(it2.next());
        QFile myFile(this->ressourcePath+ '/' + name);
        myFile.open(QFile::ReadOnly);
        QString zipPath = "../../ressources/ressources.zip";
        bool toDelete = writeInZipPath(zipPath,name,myFile.readAll());
        myFile.close();
        if (toDelete){
            myFile.remove();
        }
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
    this->ressourceDir = "\"../ressources/";
    this->ressourcePath = "../../ressources/";
    this->background = "../images/raids/" + bg;
}


