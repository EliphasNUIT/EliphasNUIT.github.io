#include "keepconstruct.h"

KeepConstruct::KeepConstruct() : Bosses()
{
    this->name = "Keep Construct";
    this->imagePath = "<img src=\"../images/240px-Keep_Construct.jpg\">";
    this->htmlFile = "../../Bosses/Construct.html";
}

QStringList KeepConstruct::getTries() {
    QDir triesDir("D:/GW2Logs/ressources/KC");
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=\"../ressources/KC/" + aux + "\">" + date +"</a> </li>";
    }
    return res;
}
