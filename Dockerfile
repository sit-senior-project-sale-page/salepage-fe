#!/usr/bin/env bash
FROM node:14.17-alpine3.10

ENV  NODE_ENV=production

WORKDIR /app

COPY ./package.json ./

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 8080

ENTRYPOINT ["yarn", "start"]