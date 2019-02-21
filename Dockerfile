FROM node:10 as builder

ENV NODE_ENV production

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package*.json yarn*.lock /home/node/app/
RUN chown -R node:node /home/node/

USER node

RUN yarn --production=false

COPY --chown=node:node . /home/node/app

RUN yarn ssr:build && \
  yarn --production && \
  yarn add core-js && \
  yarn cache clean

###

FROM node:10-alpine

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080

USER node
WORKDIR /home/node/app

COPY --chown=node:node --from=builder /home/node/app /home/node/app

CMD ["./node_modules/@uvue/server/start.js"]
