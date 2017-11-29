#include <QCoreApplication>

#include "utilities/jsonwriter.h"

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    JsonWriter writer;

    writer.execute();

    return a.exec();
}
