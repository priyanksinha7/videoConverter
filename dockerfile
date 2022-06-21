FROM node:12-alpine
WORKDIR /VIDEOC
COPY . .
RUN npm install 
CMD ["npm", "run","dev"]

