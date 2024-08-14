FROM mcr.microsoft.com/playwright:v1.46.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npx -y playwright@1.46.0 install --with-deps
COPY . .
CMD npm start