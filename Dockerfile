FROM node:latest

MAINTAINER Erik Gärtner

RUN mkdir -p /opt/bot
WORKDIR /opt/bot

COPY package.json .
RUN npm install
COPY bin ./bin

EXPOSE ${PORT:-8080}

CMD [ "npm", "start" ]
