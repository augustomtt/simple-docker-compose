import { fetchJuegos, guardarNuevoJuego } from "../controllers/juego.controller";

import { Router } from "express";
import cors from 'cors';


const router = Router();

router.use(cors());


router.get('/api/', fetchJuegos);
router.post('/api/new', guardarNuevoJuego);

export default router