#!/bin/sh

VERSION=`node -p "require('./package.json').version"`

docker build -t sazzer/fakeauth:${VERSION} -t sazzer/fakeauth:latest .
