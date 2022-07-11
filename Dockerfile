FROM node:lts-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./package*.json /usr/app/
COPY ./svgr.config.js /usr/app
RUN npm install --production --legacy-peer-deps

COPY . /usr/app
RUN npm run build

EXPOSE 8080
CMD "npm" "run" "start"
