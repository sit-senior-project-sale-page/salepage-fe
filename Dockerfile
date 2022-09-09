#!/usr/bin/env bash
FROM node:14.17-alpine3.10 as build 

WORKDIR /app

COPY ./package.json ./

RUN yarn install 

COPY . .

RUN npm run generate



FROM nginx:1-alpine as prod

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

EXPOSE 80

