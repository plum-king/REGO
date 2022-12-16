FROM node:16.13.1
RUN apt-get update && mkdir -p /app
COPY package*.json /app
WORKDIR /app
RUN npm -g config set user root
RUN npm install
COPY app.js /app
COPY . /app
ENV PORT 5000
EXPOSE 5000
CMD ["npm", "start"]
