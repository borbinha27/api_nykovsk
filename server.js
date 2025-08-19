import express from "express";
import dataRoutes from "./routers/router.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Se você quiser servir arquivos estáticos, descomente a linha abaixo:
// app.use(express.static(join(__dirname, 'public')));

app.use("/", dataRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});