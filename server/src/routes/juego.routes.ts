import { fetchJuegos, guardarNuevoJuego } from "../controllers/juego.controller";

import { Router } from "express";
import cors from 'cors';


const router = Router();

router.use(cors());


router.get('/api/juego', fetchJuegos);
router.post('/api/juego', guardarNuevoJuego);
