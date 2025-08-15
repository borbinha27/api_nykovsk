import express from "express";
import dataRoutes from "./routers/router.js";
// import cors from "cors";
import {fileURLToPath} from "url";
import dataRoutes from "./routers/router.js"

const __filename = fileURLToPath(import.meta.url);
const 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

app.use("/", dataRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
