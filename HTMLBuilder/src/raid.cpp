#include "raid.h"
#include <QDebug>

Raid::Raid(const QString& name, QObject *parent) : QObject(parent)
{
    this->name = name;
}

Raid::~Raid() {
    for (int i = 0; i < this->wingList.length(); i++) {
        delete this->wingList[i];
    }
    this->wingList.clear();
}

void Raid::generateHTMLs(){
    qInfo() << "treating " + this->name;

    for (int i = 0; i < this->wingList.length(); i++) {
        this->wingList[i]->generateHTMLs();
    }

    qInfo() << "treated " + this->name;
}

void Raid::read(QXmlStreamReader& reader) {
    qInfo() << "reading " + this->name ;

    while (reader.readNextStartElement()) {
        if (reader.name() == "wing") {
            QString wingName = reader.attributes().value("name").toString();
            Wing* wing = new Wing(wingName,0);
            this->wingList << wing;
            wing->read(reader);
        } else {
            reader.skipCurrentElement();
        }
    }

    qInfo() << "read " + this->name ;
}
