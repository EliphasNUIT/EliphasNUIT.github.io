#include "sabetha.h"

Sabetha::Sabetha() : Bosses()
{
    this->name = "Sabetha";
    this->imagePath = "<img src=\"../images/173px-Sabetha_the_Saboteur.jpg\">";
    this->htmlFile = "../../Bosses/Sabetha.html";
}

QStringList Sabetha::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Sab");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Sab/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
