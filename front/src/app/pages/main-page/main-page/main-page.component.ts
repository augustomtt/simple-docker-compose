import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: `main-page.component.html`,
})
export class MainPageComponent { 
  public consolas: Array<string> = ["PC", 
  "PlayStation 1", "PlayStation 2", "PSP", "Nintendo 64",
   "Nintendo DS"]



}
