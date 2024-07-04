import { Component, Input } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  private result: number | undefined = 0;
  @Input() n1: string = '';
  @Input() n2: string = '';
  @Input() op: string = '';
  constructor(private calculadoraService: CalculadoraService) {}
  handleClick() {
    if (!['+', '-', '*', '/'].includes(this.op)) {
      alert('OP precisa ser: +, -, *, /');
      this.clear();
    } else {
      this.result = this.calculadoraService.calcular(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.op
      );
    }
  }
  private clear() {
    this.result = 0;
    this.n1 = '';
    this.n2 = '';
    this.op = '';
  }

  public get response(): string | undefined {
    if (this.result === undefined) return '0';
    return this.result?.toString();
  }
}
