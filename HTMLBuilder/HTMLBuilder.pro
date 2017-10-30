QT += core
QT -= gui

CONFIG += c++11

TARGET = HTMLBuilder
CONFIG += console
CONFIG -= app_bundle

TEMPLATE = app

INCLUDEPATH += libs/quazip-0.7.3/quazip
LIBS += -Llibs/quazip-0.7.3/quazip/release -lquazip

release: DESTDIR = release
debug:   DESTDIR = debug

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
