FROM node:16.13.0-alpine

WORKDIR /app/screencast

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD npm start