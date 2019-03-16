# official ubuntu
FROM ubuntu:18.04

# system update
RUN apt-get -y update && apt-get -y upgrade
# package install
RUN apt-get install -y vim curl wget gnupg apt-utils

# node.js install 
RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

# react
EXPOSE 3000

# project dir
WORKDIR /app
