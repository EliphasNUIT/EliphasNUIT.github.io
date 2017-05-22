#ifndef XERA_H
#define XERA_H

#include "./bosses.h"

class Xera : public Bosses
{
public:
    Xera();
private:
    QStringList getTries();
};

#endif // XERA_H
