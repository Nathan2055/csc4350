FROM node:lts
WORKDIR /usr/src/TimerApp.js
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "TimerApp.js"]