#include "samarog.h"

Samarog::Samarog() : Bosses()
{
    this->name = "Samarog";
    this->imagePath = "<img src=\"../images/240px-Samarog.jpg\">";
    this->htmlFile = "../../Bosses/Samarog.html";
}

QStringList Samarog::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Sam");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Sam/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
