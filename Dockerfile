# Stage 1: Build React app
FROM node:19-alpine as builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
RUN yarn build

# Stage 2: Serve React app using Nginx
FROM nginx:1.21.0-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copie o arquivo nginx.conf para dentro do contêiner
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copie os arquivos do aplicativo React compilados para a pasta do Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Comando para iniciar o servidor nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
