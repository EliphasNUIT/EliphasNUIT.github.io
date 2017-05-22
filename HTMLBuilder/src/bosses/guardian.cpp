#include "guardian.h"


Guardian::Guardian() : Bosses()
{
    this->name = "Vale Guardian";
    this->imagePath = "<img src=\"../images/214px-Vale_Guardian.jpg\">";
    this->htmlFile = "../../Bosses/Guardian.html";
}

QStringList Guardian::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/VG");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/VG/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
