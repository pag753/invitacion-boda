# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ejecutamos el build (esto genera /app/build o /app/dist)
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:stable-alpine
# Cambiamos a 'dist' si usas Vite, o mantenemos 'build' si es CRA. 
# Si no estás seguro, revisa tu package.json. Por ahora probamos con 'dist' que es lo común hoy:
COPY --from=build /app/dist /usr/share/nginx/html

# NOTA: Si el error persiste, cambia la línea anterior por:
# COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]