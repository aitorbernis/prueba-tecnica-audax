FROM node:18-alpine

WORKDIR /usr/src/app
COPY package*.json tsconfig.json ./
RUN npm install
COPY src ./src

CMD ["npm", "run", "dev"]