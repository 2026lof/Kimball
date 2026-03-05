#!/bin/bash

# install gulp
echo "Installing gulp..."
npm -g install gulp-cli

# install dependencies
echo "Installing dependencies..."
npm install


echo "Generating demo site..."
npm run deploy