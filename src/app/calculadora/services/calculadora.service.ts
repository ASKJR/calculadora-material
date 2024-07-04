import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}
  calcular(n1: number, n2: number, op: string): number | undefined {
    switch (op) {
      case '+':
        return this.somar(n1, n2);
      case '-':
        return this.subtrair(n1, n2);
      case '*':
        return this.multiplicar(n1, n2);
      case '/':
        return this.dividir(n1, n2);
      default:
        return undefined;
    }
  }
  private somar = (n1: number, n2: number) => n1 + n2;
  private subtrair = (n1: number, n2: number) => n1 - n2;
  private multiplicar = (n1: number, n2: number) => n1 * n2;
  private dividir = (n1: number, n2: number) => n1 / n2;
}
