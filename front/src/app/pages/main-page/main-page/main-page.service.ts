import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Juego } from '../../../model/juego.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private httpClient: HttpClient) {

   }

   enviarNuevoJuego(juego: Juego): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(`url`, juego, { headers: header });
   }

}
