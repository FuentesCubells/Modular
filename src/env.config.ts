import dotenv from "dotenv";

// Determina el archivo de variables según NODE_ENV
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
dotenv.config({ path: envFile });