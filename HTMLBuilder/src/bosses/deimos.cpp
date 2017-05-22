#include "deimos.h"

Deimos::Deimos() : Bosses()
{
    this->name = "Deimos";
    this->imagePath = "<img src=\"../images/240px-Deimos.jpg\">";
    this->htmlFile = "../../Bosses/Deimos.html";
}

QStringList Deimos::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Dei");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Dei/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
