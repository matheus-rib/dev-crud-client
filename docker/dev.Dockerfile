FROM node:12-alpine

RUN yarn global add @vue/cli && apk add git bash
