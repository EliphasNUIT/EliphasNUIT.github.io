#include "slothasor.h"

Slothasor::Slothasor() : Bosses()
{
    this->name = "Slothasor";
    this->imagePath = "<img src=\"../images/240px-Slothasor.jpg\">";
    this->htmlFile = "../../Bosses/Slothasor.html";
}

QStringList Slothasor::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Sloth");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Sloth/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
