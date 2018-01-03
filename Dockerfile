FROM node:6.11-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install --production

COPY . /app
EXPOSE 8080 8081

CMD ["npm", "start"]
