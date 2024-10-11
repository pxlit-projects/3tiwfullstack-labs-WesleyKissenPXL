import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  textbox1: string = '';
  textbox2: string = '';
  result: number | null = null;
  isResultVisible: boolean = false;


  optellen(){
    this.result = Number(this.textbox1) + Number(this.textbox2);
    this.isResultVisible = true;
  }
}
