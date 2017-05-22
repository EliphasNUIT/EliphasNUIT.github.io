#include "cairn.h"

Cairn::Cairn() : Bosses()
{
    this->name = "Cairn";
    this->imagePath = "<img src=\"../images/240px-Cairn_the_Indomitable.jpg\">";
    this->htmlFile = "../../Bosses/Cairn.html";
}

QStringList Cairn::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Cairn");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Cairn/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}

