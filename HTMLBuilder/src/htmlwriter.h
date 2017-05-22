#ifndef HTMLWRITER_H
#define HTMLWRITER_H

#include <QObject>
#include <QVector>
#include "./bosses/bosses.h"

class HtmlWriter : public QObject
{
    Q_OBJECT
public:
    explicit HtmlWriter(QObject *parent = 0);
    ~HtmlWriter();
    void treatHTML();
signals:

public slots:
private:
    QVector<Bosses*> bossList;
};

#endif // HTMLWRITER_H
