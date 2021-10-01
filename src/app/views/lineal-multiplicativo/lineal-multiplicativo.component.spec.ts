import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealMultiplicativoComponent } from './lineal-multiplicativo.component';

describe('LinealMultiplicativoComponent', () => {
  let component: LinealMultiplicativoComponent;
  let fixture: ComponentFixture<LinealMultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealMultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealMultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
