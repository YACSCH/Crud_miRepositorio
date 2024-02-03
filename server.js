import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import songsRoutes from './routes/songRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express ();
const PORT =  process.env.PORT || 3000

app.use(express.json());
app.use(songsRoutes);

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));