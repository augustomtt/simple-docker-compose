import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageService } from './main-page.service';
import { Juego } from '../../../model/juego.interface';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: `main-page.component.html`,
})
export class MainPageComponent implements OnInit { 
  public juegos: Array<Juego> = [] as Array<Juego>;
  public juegoForm: FormGroup = {} as FormGroup;
  public consolas: Array<string> = ["PC", 
  "PlayStation 1", "PlayStation 2", "PSP", "Nintendo 64",
   "Nintendo DS"]


  constructor( private form: FormBuilder, private servicio: MainPageService ) {

  }

  ngOnInit(): void {
      this.fetchJuegos();
      this.juegoForm = this.form.group({
        nombre: ['', Validators.required ],
        lanzamiento: ['', Validators.required],
        empresa: ['', Validators.required],
        consolasCompatibles: [[] as string[], Validators.required],
      })
  }

  fetchJuegos() {
    this.servicio.fetchJuegos()
      .subscribe(res => {
        this.juegos = res;
        console.log(res);
        console.log(this.juegos);
      })
  }

  onSubmit() {
    const formObtenido = this.juegoForm.value;
    this.servicio.enviarNuevoJuego(formObtenido)
    .subscribe((res) => {
        console.log(`esto es res desde onSubmit ${res}`);
        this.fetchJuegos()
    })
  }

  


}
