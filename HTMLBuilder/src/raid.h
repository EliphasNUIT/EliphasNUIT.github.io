#ifndef RAID_H
#define RAID_H

#include <QObject>
#include <QVector>
#include <QXmlStreamReader>
#include "./wing.h"

class Raid : public QObject
{
    Q_OBJECT
public:
    explicit Raid(const QString& name, QObject *parent = 0);
    ~Raid();
    void generateHTMLs();
    void read(QXmlStreamReader& reader);
private:
    QString name;
    QVector<Wing*> wingList;
};

#endif // RAID_H
