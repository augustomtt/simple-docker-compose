FROM node:alpine

WORKDIR /src/app

COPY . /src/app

EXPOSE 80:4200

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]


