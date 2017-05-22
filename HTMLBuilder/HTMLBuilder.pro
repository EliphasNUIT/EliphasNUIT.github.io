QT += core
QT -= gui

CONFIG += c++11

TARGET = HTMLBuilder
CONFIG += console
CONFIG -= app_bundle

TEMPLATE = app

release: DESTDIR = release
debug:   DESTDIR = debug

OBJECTS_DIR = $$DESTDIR/.obj
MOC_DIR = $$DESTDIR/.moc
RCC_DIR = $$DESTDIR/.qrc
UI_DIR = $$DESTDIR/.ui

SOURCES += main.cpp \
    src/htmlwriter.cpp \
    src/bosses/bosses.cpp \
    src/bosses/cairn.cpp \
    src/bosses/gorseval.cpp \
    src/bosses/keepconstruct.cpp \
    src/bosses/deimos.cpp \
    src/bosses/guardian.cpp \
    src/bosses/matthias.cpp \
    src/bosses/mursaat.cpp \
    src/bosses/sabetha.cpp \
    src/bosses/samarog.cpp \
    src/bosses/slothasor.cpp \
    src/bosses/xera.cpp

HEADERS += \
    src/htmlwriter.h \
    src/bosses/bosses.h \
    src/bosses/cairn.h \
    src/bosses/gorseval.h \
    src/bosses/keepconstruct.h \
    src/bosses/deimos.h \
    src/bosses/guardian.h \
    src/bosses/matthias.h \
    src/bosses/mursaat.h \
    src/bosses/sabetha.h \
    src/bosses/samarog.h \
    src/bosses/slothasor.h \
    src/bosses/xera.h
