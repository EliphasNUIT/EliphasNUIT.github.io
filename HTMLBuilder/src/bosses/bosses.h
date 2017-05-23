#ifndef BOSSES_H
#define BOSSES_H

#include <QObject>
#include <QDir>
#include <QFile>
#include <QStringListIterator>

class Bosses : public QObject
{
    Q_OBJECT
public:
    explicit Bosses(QObject *parent = 0);
    void writeToHtml();
    inline QString getName() {
        return this->name;
    }

signals:

public slots:
protected:
    QString name;
    QString imagePath;
    QString htmlFile;
    QString ressourcePath;
    QString ressourceDir;
private:
    QStringList getTries();
    virtual void virtualPure() = 0;
};

#endif // BOSSES_H
