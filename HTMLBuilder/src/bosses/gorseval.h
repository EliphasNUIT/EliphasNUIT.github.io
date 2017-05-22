#ifndef GORSEVAL_H
#define GORSEVAL_H


#include "./bosses.h"

class Gorseval : public Bosses
{
public:
    Gorseval();
private:
    QStringList getTries();
};

#endif // GORSEVAL_H
