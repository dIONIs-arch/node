import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ColumnColorComponent } from "./column-color/column-color.component";
import { ButtonsColunmComponent } from "./buttons-colunm/buttons-colunm.component";
import { DataColorsService } from "./data-colors.service";
import { HttpService } from "./http.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    ColumnColorComponent, ButtonsColunmComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  constructor(private service: DataColorsService, private httpServe: HttpService) {}

  // @ViewChild(`addButton`) button: ElementRef<HTMLButtonElement>;

  
  deleteColor(i: any) {
    this.dataColors.splice(this.dataColors.indexOf(i) + 1, 1)
  }
  

  dataColors: number[] = this.service.dataColorsArr; 

  addColor() {
    this.httpServe.getData();
    

    this.dataColors.push(6)
  }
}
