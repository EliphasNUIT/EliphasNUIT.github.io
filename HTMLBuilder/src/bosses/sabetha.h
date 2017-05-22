#ifndef SABETHA_H
#define SABETHA_H

#include "./bosses.h"

class Sabetha : public Bosses
{
public:
    Sabetha();
private:
    QStringList getTries();
};

#endif // SABETHA_H
