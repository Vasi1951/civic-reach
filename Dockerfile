# Stage 1: Build the React Application
FROM node:20-slim AS build

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve the app with Express
FROM node:20-slim

WORKDIR /app

# Only copy the built files, server file, and package.json
COPY --from=build /app/dist ./dist
COPY server.js .
COPY package.json package-lock.json* ./

# Install only production dependencies (express, helmet, cors)
RUN npm install --omit=dev --legacy-peer-deps

# Start the server
EXPOSE 8080
CMD ["node", "server.js"]
