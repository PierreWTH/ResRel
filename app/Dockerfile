FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr//app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]