#include "gorseval.h"


Gorseval::Gorseval() : Bosses()
{
    this->name = "Gorseval";
    this->imagePath = "<img src=\"../images/240px-Gorseval_the_Multifarious.jpg\">";
    this->htmlFile = "../../Bosses/Gorseval.html";
}

QStringList Gorseval::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/Gorse");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/Gorse/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
