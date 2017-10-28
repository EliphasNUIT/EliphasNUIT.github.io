#ifndef BOSS_H
#define BOSS_H

#include <QObject>
#include <QTextStream>
#include <QXmlStreamReader>

class Boss : public QObject
{
    Q_OBJECT
public:
    explicit Boss(const QString& name,QObject *parent = 0);
    void generateHTMLs(QTextStream &streamIndex);
    void read(QXmlStreamReader& reader);
signals:

public slots:
private:
    QString name;
    QString imagePath;
    QString htmlFile;
    QString ressourcePath;
    QString ressourceDir;
    QString shortRef;
    QString background;
private:
    QStringList getTries();
};

#endif // BOSSES_H
