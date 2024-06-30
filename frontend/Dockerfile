FROM node:21.3.0-slim AS base
WORKDIR /app

FROM base AS dev-frontend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start" ]

FROM base AS prod-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine3.19-slim
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]