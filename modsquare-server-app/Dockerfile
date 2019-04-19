FROM node:10-alpine

WORKDIR /app

COPY package*.json /app/

RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install node-gyp -g &&\
  npm install &&\
  npm rebuild bcrypt --build-from-source && \
  npm cache clean --force &&\
  apk del native-deps

RUN npm install --production
COPY . /app/

EXPOSE 3000
