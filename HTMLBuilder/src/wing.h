#ifndef WING_H
#define WING_H

#include <QObject>
#include <QVector>
#include <QXmlStreamReader>
#include <QTextStream>
#include "./boss.h"

class Wing : public QObject
{
    Q_OBJECT
public:
    explicit Wing(const QString& name, QObject *parent = 0);
    ~Wing();
    void generateHTMLs(QTextStream& stream);
    void read(QXmlStreamReader& reader);
private:
    QString name;
    QVector<Boss*> bossList;
};

#endif // WING_H
