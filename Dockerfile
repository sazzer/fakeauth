FROM node:8.11.4-alpine

ENV PORT=3000
EXPOSE 3000

WORKDIR /fakeauth
ADD package.json yarn.lock .env *.js /fakeauth/
RUN yarn install

CMD node index.js
