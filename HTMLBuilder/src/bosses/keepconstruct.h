#ifndef KEEPCONSTRUCT_H
#define KEEPCONSTRUCT_H

#include "./bosses.h"

class KeepConstruct : public Bosses
{
public:
    KeepConstruct();
private:
    QStringList getTries();
};

#endif // KEEPCONSTRUCT_H
