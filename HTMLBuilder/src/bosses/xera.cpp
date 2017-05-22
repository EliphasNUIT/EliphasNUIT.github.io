#include "xera.h"

Xera::Xera() : Bosses()
{
    this->name = "Xera";
    this->imagePath = "<img src=\"../images/228px-Xera_(Illusion).jpg\">";
    this->htmlFile = "../../Bosses/Xera.html";
}

QStringList Xera::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Xera");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Xera/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
