FROM ubuntu:18.10 as Builder
ARG API_BASE_URL
RUN apt-get update && apt-get install -y curl build-essential && curl -sL https://deb.nodesource.com/setup_10.x | bash \
  && apt-get install -y nodejs

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
COPY resources/docker.env /app/.env
RUN npm run build
#################################################
FROM nginx:alpine

COPY resources/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=Builder /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
