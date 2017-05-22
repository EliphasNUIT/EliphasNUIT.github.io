#include "mursaat.h"

Mursaat::Mursaat() : Bosses()
{
    this->name = "Mursaat Overseer";
    this->imagePath = "";//"<img src=\"../images/240px-Cairn_the_Indomitable.jpg\">";
    this->htmlFile = "../../Bosses/Mursaat.html";
}

QStringList Mursaat::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/MO");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/MO/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}

