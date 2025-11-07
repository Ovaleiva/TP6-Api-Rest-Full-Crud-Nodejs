# 🐳 API REST con Node.js, Express y MongoDB (en Docker)

Este proyecto implementa una API RESTful completa (CRUD) utilizando Node.js y Express, con persistencia de datos manejada por una instancia de MongoDB. Toda la aplicación se levanta y gestiona utilizando Docker Compose.

## ⚙️ Requisitos

1.  **Docker Desktop:** Instalado y ejecutándose.

## ▶️ Guía de Inicio Rápido


### 1. Levantar el Stack Completo (API y MongoDB)

Desde la carpeta raíz del proyecto, ejecutar:

```bash
docker-compose up --build -d

### 2. Verificar el Estado

docker-compose ps

### 3. Detener los Contenedores

docker-compose down

# o si quieres eliminar también el volumen de datos de Mongo (para empezar de cero)

docker-compose down -v