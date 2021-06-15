FROM node:14.17.0-alpine3.12

RUN mkdir -p /home/app && chown -R node:node /home/app
RUN apk add --no-cache bash

# Creates the work directory for the project
WORKDIR /home/app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
