###Build###
FROM node:20 AS build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@15.1.6
COPY . /app

CMD ng serve --host 0.0.0.0
