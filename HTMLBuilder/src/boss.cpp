#include "boss.h"

#include <QDebug>
#include <QTextStream>

Boss::Boss(const QString& name,QObject *parent) : QObject(parent)
{
	this->name = name;
}

void Boss::generateHTMLs(QTextStream& streamIndex){
    qInfo() << "        treating " + this->name;

    streamIndex << "<li> <a href=\"./Bosses/" + this->shortRef + ".html\">" + this->name + "</a> </li>";

    QStringList res;
    QFile htmlFile(this->htmlFile);

    res << "<!DOCTYPE html>";
    res <<"<html>";
    res << "<head>";
    res << "    <meta charset=\"latin\">";
    res << "    <title>[ODS] " + this->name + " Logs</title>";
    res << "    <meta name=\"author\" content=\"EliphasNUIT\">";
    res << "    <link href=\"../styles/style.css\" rel=\"stylesheet\" type=\"text/css\">";
    res << "</head>";
    res << "<body>";
    res << "    <h1>" + this->name + " [ODS]</h1>";
    res << this->imagePath;
    res << "    <p> <a href=\"../index.html\">Index</a> </p>";
    res << "    <p>Les try</p> ";
    res << "        <ul> ";
    res << this->getTries();
    res << "        </ul>";

    res << QString::fromLatin1("    <p>Tous les logs ont été créés par <a href=\"https://www.deltaconnected.com/arcdps/\">ArcDPS</a> et parsés par <a href=\"https://raidheroes.tk/\">Raid Heroes</a>.</p>");
    res << "</body>";
    res <<"</html>";

    QStringListIterator it(res);

    if (htmlFile.open(QIODevice::ReadWrite)) {
        QTextStream stream(&htmlFile);
        while(it.hasNext()) {
            stream << it.next() << endl;
        }
    }
    htmlFile.close();

    qInfo() << "        treated " +this->name;  ;
}

QStringList Boss::getTries() {
    QDir triesDir(this->ressourcePath);
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"/");
        date.insert(7,"/");
        res << "<li> <a href=" + this->ressourceDir + aux + "\">" + date +"</a> </li>";
    }
    return res;
}

void Boss::read(QXmlStreamReader& reader) {
    qInfo() << "        reading " + this->name ;
	QString image, shortRef;
	while (reader.readNextStartElement()) {
		if (reader.name() == "image") {
			image = reader.readElementText();
		} else if (reader.name() == "shortRef") {
			shortRef = reader.readElementText();
        } else {
            reader.skipCurrentElement();
        }
	}
    qInfo() << "        read " + this->name ;
    this->shortRef = shortRef;
	this->imagePath = "<img src=\"../images/" + image + "\">";
	this->htmlFile = "../../Bosses/" + shortRef + ".html";
    this->ressourceDir = "\"../ressources/" + shortRef + "/";
    this->ressourcePath = "../../ressources/" + shortRef;
}


