#include "wing.h"
#include <QDebug>

Wing::Wing(const QString& name, QObject *parent) : QObject(parent)
{
    this->name = name;
}

Wing::~Wing() {
    for (int i = 0; i < this->bossList.length(); i++) {
        delete this->bossList[i];
    }
    this->bossList.clear();
}

void Wing::generateHTMLs(QTextStream& stream){
    qInfo() << "    treating " + this->name;

    stream << "    <h3>"+this->name+"</h3>" << endl;
    stream << "    <ul>" << endl;
    for (int i = 0; i < this->bossList.length(); i++) {
        this->bossList[i]->generateHTMLs(stream);
    }
    stream << "    </ul>" << endl;

    qInfo() << "    treated " + this->name;
}

void Wing::read(QXmlStreamReader& reader) {

    qInfo() << "    reading " + this->name ;
    while (reader.readNextStartElement()) {
        if (reader.name() == "boss") {
            QString bossName = reader.attributes().value("name").toString();
            Boss* boss = new Boss(bossName,0);
            this->bossList << boss;
            boss->read(reader);
        } else {
            reader.skipCurrentElement();
        }
    }
    qInfo() << "    read " + this->name ;
}
