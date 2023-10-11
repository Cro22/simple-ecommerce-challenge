FROM node:17.5.0-alpine AS development
LABEL authors="jesus"

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 4000

CMD ["node", "./src/main.js", "--host", "0.0.0.0"]
