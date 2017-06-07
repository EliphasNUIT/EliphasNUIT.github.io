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
    explicit Bosses(QObject *parent = 0, const QString& name, const QString& shortRef);
    void writeToHtml();

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
