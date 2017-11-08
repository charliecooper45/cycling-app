FROM node:8.9.0

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]