import { Request, Response } from "express";
import { db } from "../config/pouchdb.config";
import { Juego } from "../model/juego.interface";

export async function fetchJuegos(req: Request, res: Response) {



    try {
        const docs = await db.allDocs({
            include_docs: true,
        });
        res.send(docs.rows);
    } catch (err) {
        res.send(err);
        console.log(err);
    }
}

export function guardarNuevoJuego(req: Request, res: Response) {
    const { body } = req;

    db.post(body).then((result: any) => {
        res.send(result);
    }).catch((err: any) => {
        res.send(err);
        console.log(err);
    });

}

