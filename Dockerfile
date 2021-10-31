FROM node:current-slim
RUN npm install -g npm@8.1.2
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
EXPOSE 8080
CMD npm run serve
