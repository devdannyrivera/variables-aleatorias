import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lineal-aditivo',
  templateUrl: './lineal-aditivo.component.html',
  styleUrls: ['./lineal-aditivo.component.scss']
})
export class LinealAditivoComponent implements OnInit {

  constructor() { }
  x: Array<string> = [];
  r: Array<string> = [];
  ngOnInit(): void { 
  }

  onSubmit(form: NgForm): void {
    if (form.value['x'] == "" || form.value['m'] < 1) {
      alert("Los datos ingresados no son validos, todos los numeros deben ser mayores a 0")
    } else {
      this.x = form.value['x'].split(',');
      this.x.forEach(item => item.trim());
      let m = parseFloat(form.value['m']);
      const range = this.x.length - 1;
      this.x.unshift("");
      let keep = true;
      while(this.x.length > this.r.length) {
        this.r.push("");
      }

      
      while (keep) {
        this.x.push(((parseFloat(this.x[this.x.length - 1]) + parseFloat(this.x[(this.x.length - 1) - range])) % m).toString());
        this.r.push(((parseFloat(this.x[this.x.length - 1])) / (m - 1)).toString());
        if (this.x.includes(((parseFloat(this.x[this.x.length - 1]) + parseFloat(this.x[(this.x.length - 1) - range])) % m).toString())) {
          keep = false;
        }
      };
    }
  }

}
