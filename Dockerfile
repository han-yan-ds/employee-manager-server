FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 9001
RUN npm start
# RUN ["npm", "start"]