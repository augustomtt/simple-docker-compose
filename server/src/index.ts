import express from 'express' 
import cors from 'cors'
import router from './routes/juego.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
})

