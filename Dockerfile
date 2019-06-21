# BUILD ENVIRONMENT
FROM node:12-alpine

ENV NODE_ENV=development

RUN apk add --no-cache tzdata && \
    cp -fv /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    echo "America/Sao_Paulo" > /etc/timezone && \
    apk del tzdata

WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY . .

CMD ["node", "app.local.js"]
