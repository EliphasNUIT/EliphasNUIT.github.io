#ifndef MURSAAT_H
#define MURSAAT_H

#include "./bosses.h"

class Mursaat : public Bosses
{
public:
    Mursaat();
private:
    QStringList getTries();
};

#endif // MURSAAT_H
