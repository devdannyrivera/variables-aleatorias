import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos-medios',
  templateUrl: './productos-medios.component.html',
  styleUrls: ['./productos-medios.component.scss']
})
export class ProductosMediosComponent implements OnInit {

  constructor() { }
  x : Array<string> = [];
  y : Array<string> = [];
  r : Array<string> = [];
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.value['x0'] < 1000 || form.value['x1'] < 1000) {
      alert("La raices deben tener mas de 3 digitos")
    } else {
      this.x = [];
      this.y = [];
      this.r = [];
      let keep = true;
      this.x.push(form.value['x0']);
      this.x.push(form.value['x1']);
      this.y.push((parseFloat(this.x[this.x.length - 1]) * parseFloat(this.x[this.x.length - 2])).toString());
      const length = (this.y[0]).toString().length;
      const numbersToTake = (length / 2) % 2 == 0 ? length / 2 : (length / 2) + 1;
      const start = (length - numbersToTake) / 2;
      const end = start + numbersToTake;
      this.r.push("");
      while (keep) {
        this.x.push((this.y[this.y.length - 1]).toString().substring(start,end));
        this.y.push(this.formatNumber((parseFloat(this.x[this.x.length - 1]) * parseFloat(this.x[this.x.length - 2])).toString()));
        this.r.push(`0.${parseFloat(this.x[this.x.length - 1]).toString()}`);
        if(this.x.includes((this.y[this.y.length - 1]).toString().substring(start,end))) {
          keep = false;
          this.r.push(`0.${(this.y[this.y.length - 1]).toString().substring(start,end)}`);
          this.r.push("");
          this.y.push("");
        }
      };
      
      console.log(this.x);
      console.log(this.y);
      console.log(this.r);
    }
  }

  formatNumber(number: string) {
    if(number.length < 8) {
      while (number.length < 8) {
        number = '0' + number;
      }
    }
    return number;
  }


}
