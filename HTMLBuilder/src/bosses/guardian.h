#ifndef GUARDIAN_H
#define GUARDIAN_H

#include "./bosses.h"

class Guardian : public Bosses
{
public:
    Guardian();
private:
    void virtualPure(){}
};

#endif // GUARDIAN_H
