#include "htmlwriter.h"
#include <QStringListIterator>

#include <QDebug>
#include <QDir>
#include <QFile>

HtmlWriter::HtmlWriter(QObject *parent) : QObject(parent)
{
}

HtmlWriter::~HtmlWriter() {
    for (int i = 0; i < this->raidList.length(); i++) {
        delete this->raidList[i];
    }
    this->raidList.clear();
}

void HtmlWriter::execute(){

    qInfo() << "removing old files";
    QString path = "../../Bosses/";
    QDir dir(path);
    dir.setNameFilters(QStringList() << "*.*");
    dir.setFilter(QDir::Files);
    foreach(QString dirFile, dir.entryList())
    {
        qInfo() << "removing " + dirFile;
        dir.remove(dirFile);
    }
    qInfo() << "old files removed";

    QFile xmlFile("../../ressources/raidInfos.xml");
	if(xmlFile.open(QIODevice::ReadOnly)) {
        qInfo() << "opened xml";
		QXmlStreamReader reader(&xmlFile);
		if (reader.readNextStartElement()) {
			if (reader.name() == "raid_info") {
				this->read(reader);
			}
		}else {
            reader.raiseError(QObject::tr("Incorrect file"));
        }
    } else {
        qInfo() << "file not found";
    }

    for (int i = 0; i < this->raidList.length(); i++) {
        this->raidList[i]->generateHTMLs();
    }
}

void HtmlWriter::read(QXmlStreamReader& reader){
	while (reader.readNextStartElement()) {
		if (reader.name() == "raid") {
            QString raidName = reader.attributes().value("name").toString();
            Raid* raid = new Raid(raidName,0);
            this->raidList << raid;
            raid->read(reader);
        }
	}
    qInfo() << endl;
}
