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

void Raid::generateHTMLs(QTextStream& stream){
    qInfo() << "treating " + this->name;

    stream << "    <h2>"+this->name+"</h2>" << endl;
    for (int i = 0; i < this->wingList.length(); i++) {
        this->wingList[i]->generateHTMLs(stream);
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
