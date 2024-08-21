FROM node:current-alpine3.20

WORKDIR /backend2

COPY . .

#-p logs dosyasi varsa calistir yoksa olustur 
RUN mkdir -p logs

RUN mkdir -p upload

RUN npm install

CMD ["npm", "start"]

EXPOSE 8000