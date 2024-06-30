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

FROM nginx:stable-alpine3.19-slim AS client-build
COPY --from=prod-frontend /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]