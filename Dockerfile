# Stage 1: Build the React Application
FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the app with Express
FROM node:22-alpine

WORKDIR /app

# Only copy the built files, server file, and package.json
COPY --from=build /app/dist ./dist
COPY server.js .
COPY package.json package-lock.json ./

# Install only production dependencies (express, helmet, cors)
RUN npm ci --omit=dev

# Start the server
EXPOSE 8080
CMD ["node", "server.js"]
