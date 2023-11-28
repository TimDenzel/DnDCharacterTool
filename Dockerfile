###Build###
FROM node:20 AS build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

###Run###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/dndcharactertool /usr/share/nginx/html
#EXPOSE 4200
#CMD ["npm", "start"]
