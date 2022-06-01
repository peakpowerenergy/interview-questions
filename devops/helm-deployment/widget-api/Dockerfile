FROM node:slim

WORKDIR /app
ADD . .
RUN npm i
USER node
CMD [ "npm", "start" ]
