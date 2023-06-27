FROM node:18.16.0

WORKDIR /src

COPY package.json yarn.lock ./

COPY . .

RUN yarn install

EXPOSE 3000

RUN chmod +x /src

CMD ["yarn", "run", "start"]