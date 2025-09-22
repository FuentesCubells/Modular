import './env.config';
import express from "express";
import { db } from "./infrastructure/database/postgres";
import housingRoutes from './infrastructure/routes/hotel/hotel.routes';

const app = express();
app.use(express.json());
app.use("/housing", housingRoutes);

async function startServer() {
  try {
    // probar la conexión
    await db.execute("Select * from housing");
    console.log("✅ Conectado a la base de datos");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    
  } catch (err) {
    console.error("❌ Error conectando a la DB:", err);
    process.exit(1);
  }
}

startServer();
