FROM node:23-bullseye AS base

# Install dependencies
FROM base AS deps

# Install openssl 3.x
RUN apt-get update && apt-get install -y openssl

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./prisma ./prisma

RUN npm install

# Build
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Run app
FROM base AS production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
