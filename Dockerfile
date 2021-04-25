FROM node:14

RUN cd /workspace/.git/

RUN yarn start
