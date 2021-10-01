import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lineal-multiplicativo',
  templateUrl: './lineal-multiplicativo.component.html',
  styleUrls: ['./lineal-multiplicativo.component.scss']
})
export class LinealMultiplicativoComponent implements OnInit {

  constructor() { }
  x: Array<string> = [];
  r: Array<string> = [];
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.value['x0'] % 2 != 1 || form.value['g'].includes('.') ) {
      alert("Los datos ingresados no son validos, recuerde que x0 debe ser un numero impar y g un numero entero")
    } else {
      this.x = [];
      this.r = [];
      this.r.push("");
      let k = parseFloat(form.value['k']);
      let g = parseFloat(form.value['g']);
      const a = 5 + (8 * k);
      const m = Math.pow(2, g);
      let keep = true;
      this.x.push(form.value['x0']);
      
      while (keep) {
        this.x.push(((a * parseFloat(this.x[this.x.length - 1])) % m).toString());
        this.r.push(((parseFloat(this.x[this.x.length - 1])) / (m - 1)).toString());
        if (this.x.includes(((a * parseFloat(this.x[this.x.length - 1])) % m).toString())) {
          keep = false;
        }
      };

      console.log(this.x);
      console.log(this.r);
    }
  }
}
