#ifndef HTMLWRITER_H
#define HTMLWRITER_H

#include <QObject>


class JsonWriter : public QObject
{
    Q_OBJECT
public:
    explicit JsonWriter(QObject *parent = 0);
    ~JsonWriter();
    void execute();
public slots:
private:
};

#endif // HTMLWRITER_H
