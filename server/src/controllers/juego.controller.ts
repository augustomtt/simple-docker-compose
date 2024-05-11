import { Request, Response } from "express";
import { db } from "../config/pouchdb.config";

export async function fetchJuegos(req: Request, res: Response) {
    try {
        const docs = await db.allDocs({
            include_docs: true,
        });
        res.send(docs);
    } catch (err) {
        res.send(err);
        console.log(err);
    }
}   

export function guardarNuevoJuego(req: Request, res: Response) {
    const { body } = req;
    db.put(body).then((result: any) => {
        res.send(result);
    }).catch((err: any) => {
        res.send(err);
        console.log(err);
    });

}

