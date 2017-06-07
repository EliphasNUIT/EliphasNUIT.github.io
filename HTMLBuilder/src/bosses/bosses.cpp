#include "bosses.h"

#include <QDebug>
#include <QTextStream>

Bosses::Bosses(QObject *parent) : QObject(parent, const QString& name, const QString& shortRef)
{
}

void Bosses::writeToHtml(){
    QStringList res;
    QFile htmlFile(this->htmlFile);

    res << "<!DOCTYPE html>";
    res <<"<html>";
    res << "<head>";
    res <<    "<meta charset=\"latin\">";
    res <<    "<title>[ODS] " + this->name; + " Logs</title>";
    res <<    "<meta name=\"author\" content=\"EliphasNUIT\">";
    res <<    "<link href=\"../styles/style.css\" rel=\"stylesheet\" type=\"text/css\">";
    res <<  "</head>";
    res <<  "<body>";
    res <<    "<h1>" + this->name; + " [ODS]</h1>";
    res <<    this->imagePath;
    res <<    "<p> <a href=\"https://eliphasnuit.github.io/\">Index</a> </p>";
    res <<    "<p>Les try</p> ";
    res <<        "<ul> ";
    res << this->getTries();
    res <<        "</ul>";

    res <<    "<p>Tous les logs ont été créés par <a href=\"https://www.deltaconnected.com/arcdps/\">ArcDPS</a> et parsés par <a href=\"https://raidheroes.tk/\">Raid Heroes</a>.</p>";
    res <<  "</body>";
    res <<"</html>";

    QStringListIterator it(res);

    if (htmlFile.open(QIODevice::ReadWrite)) {
        QTextStream stream(&htmlFile);
        while(it.hasNext()) {
            stream << it.next() << endl;
        }
    }
}

QStringList Bosses::getTries() {
    QDir triesDir(this->ressourcePath);
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=" + this->ressourceDir + aux + "\">" + date +"</a> </li>";
    }
    return res;
}

