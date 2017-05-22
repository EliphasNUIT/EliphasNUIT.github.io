#ifndef SLOTHASOR_H
#define SLOTHASOR_H

#include "./bosses.h"

class Slothasor : public Bosses
{
public:
    Slothasor();
private:
    QStringList getTries();
};

#endif // SLOTHASOR_H
