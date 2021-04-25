FROM node:14

RUN npm install --global yarn

RUN yarn start
