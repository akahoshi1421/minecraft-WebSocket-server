#!/bin/sh

for file in `\find . -name '*.ts'`; do
    if [ ! "$(echo ${file} | grep "node_modules" )" ]; then
        tsc $file
    fi
done