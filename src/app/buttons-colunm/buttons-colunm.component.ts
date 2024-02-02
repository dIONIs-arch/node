import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-buttons-colunm',
  standalone: true,
  imports: [],
  templateUrl: './buttons-colunm.component.html',
  styleUrl: './buttons-colunm.component.css'
})
export class ButtonsColunmComponent {

  constructor(private http: HttpService) {}

  @ViewChild(`btnAddColor`) btnAddColor: ElementRef<HTMLButtonElement>;
  @Output() eventAddColor: EventEmitter<any> = new EventEmitter();
  
  addColor() {
    this.btnAddColor.nativeElement.blur();
    this.eventAddColor.emit();
  }

  saveColors() {
    console.log('Сохранить цвета 1 НАЧАЛО');
    this.http.postData();
    console.log('Сохранить цвета 1 КОНЕЦ');
  }
  
  downloadColors(): void {
    console.log('Загрузить цвета 1');
    this.http.getData();
  }
}
