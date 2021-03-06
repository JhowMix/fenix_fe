FROM node:latest
RUN mkdir /app
RUN apt update
RUN apt install nano
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
EXPOSE 3001
