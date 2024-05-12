import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juego } from '../../../model/juego.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private httpClient: HttpClient) {

   }

   fetchJuegos(): Observable<Juego[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/api/').pipe(
      map(docs => {
        // Mapear cada documento del JSON recibido al formato de la interfaz Juego
        return docs.map(juego => ({
          name: juego.doc.nombre,
          lanzamiento: parseInt(juego.doc.lanzamiento), // Convertir el lanzamiento a número
          empresa: juego.doc.empresa,
          consolasLanzamiento: juego.doc.consolasCompatibles
        }));
      })
    );
  }

   enviarNuevoJuego(juego: Juego) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>(`http://localhost:3000/api/new`, juego, { headers: header });
   }

}
