#ifndef SAMAROG_H
#define SAMAROG_H

#include "./bosses.h"

class Samarog : public Bosses
{
public:
    Samarog();
private:
    QStringList getTries();
};

#endif // SAMAROG_H
