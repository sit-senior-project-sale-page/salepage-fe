FROM node:14.17-alpine3.10

WORKDIR /app

COPY ./package.json ./

RUN yarn install 

COPY . .

RUN yarn build

EXPOSE 12130

CMD ["yarn", "start"]