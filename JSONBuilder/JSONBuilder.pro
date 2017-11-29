QT += core
QT -= gui

CONFIG += c++11

TARGET = JSONWriter
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
    src/utilities/jsonwriter.cpp

HEADERS += \
    src/utilities/jsonwriter.h
