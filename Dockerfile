FROM node
LABEL name="docker-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm run dev
