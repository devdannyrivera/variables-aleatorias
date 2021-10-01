import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-multiplicador-constante',
  templateUrl: './multiplicador-constante.component.html',
  styleUrls: ['./multiplicador-constante.component.scss']
})
export class MultiplicadorConstanteComponent implements OnInit {

  constructor() { }
  x: Array<string> = [];
  y: Array<string> = [];
  r: Array<string> = [];
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.value['x0'] < 1000 || form.value['a'] < 1000) {
      alert("La raiz y la constante deben tener mas de 3 digitos")
    } else {
      this.x = [];
      this.y = [];
      this.r = [];
      let keep = true;
      this.x.push(form.value['x0']);
      const a = parseFloat(form.value['a']);
      this.y.push((a * parseFloat(this.x[this.x.length - 1])).toString());
      const length = (((this.y[0]).length) / 2 % 2 == 0 ? (this.y[0]).length : (this.y[0]).length + 1)
      const numbersToTake = (form.value['x0']).length;
      this.y[0] = this.formatNumber(this.y[0], length);
      const start = (length - numbersToTake) / 2;
      const end = start + numbersToTake;
      this.r.push("");
      while (keep) {
        this.x.push((this.y[this.y.length - 1]).toString().substring(start, end));
        this.y.push(this.formatNumber((a * parseFloat(this.x[this.x.length - 1])).toString(), length));
        this.r.push(`0.${parseFloat(this.x[this.x.length - 1]).toString()}`);
        if (this.x.includes((this.y[this.y.length - 1]).toString().substring(start, end))) {
          keep = false;
          this.r.push(`0.${(this.y[this.y.length - 1]).toString().substring(start, end)}`);
          this.y.push("");
        }
      };
    }
  }

  formatNumber(number: string, length: number) {
    if (number.length < length) {
      while (number.length < length) {
        number = '0' + number;
      }
    }
    return number;
  }
}
