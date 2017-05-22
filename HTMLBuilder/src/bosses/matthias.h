#ifndef MATTHIAS_H
#define MATTHIAS_H

#include "./bosses.h"

class Matthias : public Bosses
{
public:
    Matthias();
private:
    QStringList getTries();
};

#endif // MATTHIAS_H
