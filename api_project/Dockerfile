FROM node:20.16-alpine
EXPOSE 4000
EXPOSE 80
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start