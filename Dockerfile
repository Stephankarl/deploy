FROM node:21.3.0-slim AS base
WORKDIR /app

FROM base AS dev-backend
COPY backend/package*.json /app/
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]

FROM base AS dev-frontend
COPY frontend/package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
