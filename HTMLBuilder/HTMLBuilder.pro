QT += core
QT -= gui

CONFIG += c++11

TARGET = HTMLBuilder
CONFIG += console
CONFIG -= app_bundle


INCLUDEPATH += libs/zlib-1.2.11
LIBS += -Llibs/zlib-1.2.11 -lz
INCLUDEPATH += libs/quazip-0.7.3/quazip
LIBS += -Llibs/quazip-0.7.3/quazip/release

TEMPLATE = app

release: DESTDIR = release
debug:   DESTDIR = debug

OBJECTS_DIR = $$DESTDIR/.obj
MOC_DIR = $$DESTDIR/.moc
RCC_DIR = $$DESTDIR/.qrc
UI_DIR = $$DESTDIR/.ui

SOURCES += main.cpp \
    src/htmlwriter.cpp \
    src/boss.cpp \
    src/wing.cpp \
    src/raid.cpp

HEADERS += \
    src/htmlwriter.h \
    src/boss.h \
    src/wing.h \
    src/raid.h
