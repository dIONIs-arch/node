import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import chroma, { rgb } from "chroma-js";

@Component({
  selector: 'app-column-color',
  standalone: true,
  imports: [NgClass],
  templateUrl: './column-color.component.html',
  styleUrl: './column-color.component.css'
})

export class ColumnColorComponent implements OnInit {

  color: string = '';
  textColor: string = '';
  isOpenLock: boolean = true;
  @ViewChild(`buttonLock`) buttonLock: ElementRef<HTMLButtonElement>;
  @ViewChild(`buttonDelete`) buttonDelete: ElementRef<HTMLButtonElement>;
  @Input() indexColor: number = 0;

  generateRandomColor() {
    if (this.isOpenLock) {
      this.color = chroma.random().hex();
      this.setTextColor(this.color);
    }
  }

  setTextColor(color: string) {
    this.textColor = chroma(color).luminance() < 0.5 ? 'white' : 'black';
  }

  openLosk() {
    this.isOpenLock = !this.isOpenLock;
    this.buttonLock.nativeElement.blur();
  }

  copyTextColor() {
    navigator.clipboard.writeText(this.color);
  }

  @Output() ddd: EventEmitter<any> = new EventEmitter();

  deleteColor() {
    this.ddd.emit(this.indexColor);
    this.buttonDelete.nativeElement.blur();
  }

  @HostListener('window: keydown.space') spaceEvent() {
    this.generateRandomColor();
  }

  ngOnInit() {
    this.generateRandomColor();
  }
}
