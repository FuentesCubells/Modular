# Modular CRM

CRM modular basado en Node.js, Express, Drizzle ORM y PostgreSQL. Arquitectura hexagonal para pymes y pequeñas empresas.

---

## Requisitos del entorno

- Node.js >= **20.x** (recomendado)
- npm >= **9.x**
- PostgreSQL >= **15**
- Variables de entorno en `.env.local` (local) o `.env.production` (producción)
- Opcional: [Railway](https://railway.app/) para despliegue remoto de la DB

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
DB_URL=postgresql://usuario:contraseña@switchback.proxy.rlwy.net:44082/nombreDB
NODE_ENV=development
```

---
## Ejemplo
https://dev.to/ngoakor12/connect-a-railway-databasepostgresql-with-node-postgres-in-express-15lf