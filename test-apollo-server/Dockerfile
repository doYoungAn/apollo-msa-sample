FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY ./build ./
COPY .env ./

EXPOSE 4001
CMD ["node", "./app.js"]