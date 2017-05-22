#ifndef DEIMOS_H
#define DEIMOS_H

#include "./bosses.h"

class Deimos : public Bosses
{
public:
    Deimos();
private:
    QStringList getTries();
};

#endif // DEIMOS_H
