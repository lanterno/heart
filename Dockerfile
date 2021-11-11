FROM node:lts-slim
RUN npm install -g npm@latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
EXPOSE 8080
CMD npm run serve
