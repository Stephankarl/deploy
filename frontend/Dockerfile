FROM node:21.3.0-slim AS base
WORKDIR /app

FROM base AS dev-frontend
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM base AS prod-frontend
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine3.19-slim
COPY --from=prod-frontend /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]