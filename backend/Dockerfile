FROM node:21.3.0-slim as dev
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]


FROM node:21.3.0-slim as prod
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
