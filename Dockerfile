FROM nginx:1.14.0-alpine

MAINTAINER Your name "youremail@server.com"

RUN apk add --update bash && rm -rf /var/cache/apk/*

RUN rm -rf /usr/share/nginx/html/*

COPY /dist/RoomBookingClient/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]