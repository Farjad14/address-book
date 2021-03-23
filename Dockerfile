FROM node:14.15.4-alpine3.11

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app with `docker-compose up`
