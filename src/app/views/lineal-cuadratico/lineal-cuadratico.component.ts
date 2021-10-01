import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lineal-cuadratico',
  templateUrl: './lineal-cuadratico.component.html',
  styleUrls: ['./lineal-cuadratico.component.scss']
})
export class LinealCuadraticoComponent implements OnInit {

  constructor() { }
  x: Array<string> = [];
  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.value['x0'] < 1) {
      alert("Los datos ingresados no son validos, todos los numeros deben ser mayores a 0")
    } else {
      let m = parseFloat(form.value['m']);
      let a = parseFloat(form.value['a']);
      let b = parseFloat(form.value['b']);
      let c = parseFloat(form.value['c']);

      const range = this.x.length - 1;
      let keep = true;
      this.x.push(form.value['x0']);
      
      while (keep) {
        this.x.push((((a * Math.pow(parseFloat(this.x[this.x.length - 1]),2)) + (b * parseFloat(this.x[this.x.length - 1])) + c ) % m ).toString());
        if (this.x.includes((((a * Math.pow(parseFloat(this.x[this.x.length - 1]),2)) + (b * parseFloat(this.x[this.x.length - 1])) + c ) % m ).toString())) {
          keep = false;
        }
      };

      console.log(this.x);
    }
  }

}
