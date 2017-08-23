#include "boss.h"

#include <QDebug>
#include <QTextStream>
#include <QDate>

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
    res << "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>";
    res << "<head>";
    res << "    <meta charset=\"latin\">";
    res << "    <title>[ODS] " + this->name + " Logs</title>";
    res << "    <meta name=\"author\" content=\"EliphasNUIT\">";
    res << "    <link href=\"../styles/styleBoss.css\" rel=\"stylesheet\" type=\"text/css\">";
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

QString toDate(const QString& date) {
    return QDate::fromString(date,"yyyy_MM_dd").toString("dd/MM/yyyy");
}

QStringList Boss::getTries() {
    QDir triesDir(this->ressourcePath);
    QStringList tries = triesDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QStringList res;
    QStringListIterator it(tries);
    res << "            <script type=\"text/javascript\"> function display(frameID) { var iframe = $(frameID); iframe.attr(\"src\",iframe.data(\"src\")); iframe.attr(\"width\",\"1200\"); iframe.attr(\"height\",\"1200\");} </script>";
    res << "            <script type=\"text/javascript\"> function closeDisplay(frameID) { var iframe = $(frameID); iframe.attr(\"src\",\"about:blank\"); iframe.attr(\"width\",\"1\"); iframe.attr(\"height\",\"1\");} </script>";
    while(it.hasNext()) {
        QString aux(it.next());
        QString date = aux.split("-").at(0);
        date.insert(4,"_");
        date.insert(7,"_");
        const QString path = this->ressourceDir + aux;
        const QString iFrameName = "#" + date;
        const QString displayName = "display(\'"+iFrameName+"\')";
        const QString closeName = "closeDisplay(\'"+iFrameName+"\')";
        res << "            <li> <button onclick=\""+displayName+"\"> Afficher les logs du " + toDate(date) + "</button> <button onclick=\""+closeName+"\"> Fermer les logs du " + toDate(date) + "</button> </li>";
        res << "            <iframe id=\"" + date + "\" data-src="+path+"\" width=\"0\" height=\"0\" src=\"about:blank\"> </iframe>";
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


