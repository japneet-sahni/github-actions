#!/bin/sh

echo "Hello $1"
time=$(date)
#echo "::set-output name=time::$time"
echo "time=$time" >> $GITHUB_OUTPUT

#echo '::set-env name=HELLO::hello'
echo "HELLO=hello" >> $GITHUB_ENV