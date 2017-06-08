#ifndef BOSS_H
#define BOSS_H

#include <QObject>
#include <QDir>
#include <QFile>
#include <QXmlStreamReader>
#include <QStringListIterator>

class Boss : public QObject
{
    Q_OBJECT
public:
    explicit Boss(const QString& name,QObject *parent = 0);
    void generateHTMLs();
    void read(QXmlStreamReader& reader);
signals:

public slots:
private:
    QString name;
    QString imagePath;
    QString htmlFile;
    QString ressourcePath;
    QString ressourceDir;
private:
    QStringList getTries();
};

#endif // BOSSES_H
