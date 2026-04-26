# Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copy only exactly what's needed to serve
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./

EXPOSE 8080

CMD ["npm", "start"]
