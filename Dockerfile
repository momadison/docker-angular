FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
RUN npm i vim -g
COPY . .
RUN ng build

#use nginx as production server
FROM nginx
#copy the built app
COPY --from=builder /app/dist/python-angular-app /usr/share/nginx/html