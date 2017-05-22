#include <QCoreApplication>

#include "src/htmlwriter.h"

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    HtmlWriter writer;

    writer.treatHTML();

    return a.exec();
}
