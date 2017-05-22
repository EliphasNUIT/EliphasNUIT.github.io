#include "bosses.h"

#include <QDebug>
#include <QTextStream>

Bosses::Bosses(QObject *parent) : QObject(parent)
{

}

void Bosses::writeToHtml(){
    QStringList res;
    QFile htmlFile(this->htmlFile);

    res << "<!DOCTYPE html>";
    res <<"<html>";
    res << "<head>";
    res <<    "<meta charset=\"utf-8\">";
    res <<    "<title>[ODS] " + this->getName() + " Logs</title>";
    res <<    "<meta name=\"author\" content=\"EliphasNUIT\">";
    res <<    "<link href=\"../styles/style.css\" rel=\"stylesheet\" type=\"text/css\">";
    res <<  "</head>";
    res <<  "<body>";
    res <<    "<h1>" + this->getName() + " [ODS]</h1>";
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


