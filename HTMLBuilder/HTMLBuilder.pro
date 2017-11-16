QT += core
QT -= gui

CONFIG += c++11

TARGET = HTMLBuilder
CONFIG += console
CONFIG -= app_bundle



TEMPLATE = app

INCLUDEPATH += libs/quazip/include/quazip5
LIBS += -Llibs/quazip/lib -lquazip5

release: DESTDIR = release

extralibs.path = $$DESTDIR
extralibs.files += libs/quazip/lib/libquazip5.dll
extralibs.files += libs/zlib/bin/libzlib.dll

INSTALLS += extralibs

OBJECTS_DIR = $$DESTDIR/.obj
MOC_DIR = $$DESTDIR/.moc
RCC_DIR = $$DESTDIR/.qrc
UI_DIR = $$DESTDIR/.ui

SOURCES += src/main.cpp \
    src/utilities/htmlwriter.cpp \
    src/utilities/boss.cpp \
    src/utilities/wing.cpp \
    src/utilities/raid.cpp

HEADERS += \
    src/utilities/htmlwriter.h \
    src/utilities/boss.h \
    src/utilities/wing.h \
    src/utilities/raid.h
