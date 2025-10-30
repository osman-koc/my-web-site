# Multi-stage Dockerfile for Next.js 14 app
# Uses Node 20 (alpine) for small image size.

## Builder stage
FROM node:24.11.0-slim AS builder
WORKDIR /app

# Install dependencies (includes dev deps required for build)
COPY package.json package-lock.json* ./
RUN npm install --prefer-offline --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

## Runner stage
FROM node:24.11.0-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only what we need to run the app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Remove dev dependencies to slim image
RUN npm prune --production --silent || true

EXPOSE 3000

# Use the start script from package.json (next start)
CMD ["npm", "run", "start"]
