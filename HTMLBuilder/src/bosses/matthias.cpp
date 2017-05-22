#include "matthias.h"

Matthias::Matthias() : Bosses()
{
    this->name = "Matthias";
    this->imagePath = "<img src=\"../images/131px-Matthias_Gabrel.jpg\">";
    this->htmlFile = "../../Bosses/Matthias.html";
}

QStringList Matthias::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Mat");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Mat/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
