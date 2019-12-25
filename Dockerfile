FROM node:13-alpine as serverapp-builder

WORKDIR /app

COPY serverapp/package.json ./
COPY serverapp/package-lock.json ./
RUN npm ci

COPY serverapp/src src
COPY serverapp/tsconfig.json ./
RUN npm run build

FROM node:13-alpine as webapp-builder

WORKDIR /app

COPY webapp/package.json ./
COPY webapp/package-lock.json ./
RUN npm ci

COPY webapp/src src
COPY webapp/public public
COPY webapp/tsconfig.json ./
COPY webapp/babel.config.js ./
COPY webapp/postcss.config.js ./
RUN npm run build

FROM node:13-alpine

WORKDIR /app

COPY --from=serverapp-builder /app/dist .
COPY --from=serverapp-builder /app/package.json .
COPY --from=serverapp-builder /app/package-lock.json .
COPY --from=webapp-builder /app/dist ./webapp

RUN npm install --production

EXPOSE $PORT
CMD ["node", "app.js"]