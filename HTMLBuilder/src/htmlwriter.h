#ifndef HTMLWRITER_H
#define HTMLWRITER_H

#include <QObject>
#include <QVector>
#include <QXmlStreamReader>
#include <QFile>
#include "./raid.h"


class HtmlWriter : public QObject
{
    Q_OBJECT
public:
    explicit HtmlWriter(QObject *parent = 0);
    ~HtmlWriter();
    void execute();
public slots:
private:
    void read(QXmlStreamReader& reader);
private:
    QVector<Raid*> raidList;
};

#endif // HTMLWRITER_H
