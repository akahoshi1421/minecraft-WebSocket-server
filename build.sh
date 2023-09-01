#!/bin/sh

for file in *.ts
do
    tsc $file
done