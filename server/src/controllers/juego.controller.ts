import { Request, Response } from "express";
import { db } from "../config/pouchdb.config";
import { sha1 } from 'object-hash'; // Import only the hash function


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
    const hash = sha1(body)
    body.id = hash;

    db.put(body).then((result: any) => {
        res.send(result);
    }).catch((err: any) => {
        res.send(err);
        console.log(err);
    });

}

