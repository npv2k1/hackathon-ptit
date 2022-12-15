#  Dockerfile for Node Express Backend api (development)

FROM node:node:16.14.2

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 5000
EXPOSE 9000

CMD ["npm","start"]