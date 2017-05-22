#include "htmlwriter.h"
#include <QStringListIterator>

#include "./bosses/cairn.h"
#include "./bosses/deimos.h"
#include "./bosses/gorseval.h"
#include "./bosses/guardian.h"
#include "./bosses/keepconstruct.h"
#include "./bosses/matthias.h"
#include "./bosses/mursaat.h"
#include "./bosses/sabetha.h"
#include "./bosses/samarog.h"
#include "./bosses/slothasor.h"
#include "./bosses/xera.h"

#include <QDebug>
#include <QDir>
#include <QFile>

HtmlWriter::HtmlWriter(QObject *parent) : QObject(parent)
{
    this->bossList << new Cairn();
    this->bossList << new Deimos();
    this->bossList << new Gorseval();
    this->bossList << new Guardian();
    this->bossList << new KeepConstruct();
    this->bossList << new Matthias();
    this->bossList << new Mursaat();
    this->bossList << new Sabetha();
    this->bossList << new Samarog();
    this->bossList << new Slothasor();
    this->bossList << new Xera();
}

HtmlWriter::~HtmlWriter() {
    for (int i = 0; i < this->bossList.length(); i++) {
        delete this->bossList[i];
    }

}

void HtmlWriter::treatHTML(){
    // empty dir first
    QString path = "../../Bosses/";
    QDir dir(path);
    dir.setNameFilters(QStringList() << "*.*");
    dir.setFilter(QDir::Files);
    foreach(QString dirFile, dir.entryList())
    {
        dir.remove(dirFile);
    }
    // then create again
    for (int i = 0; i < this->bossList.length(); i++) {
        Bosses* boss = this->bossList[i];
        qInfo() << "treating " + boss->getName();
        boss->writeToHtml();
        qInfo() << "finished " + boss->getName();
        qInfo() << endl;
    }
}
