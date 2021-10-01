import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealCuadraticoComponent } from './lineal-cuadratico.component';

describe('LinealCuadraticoComponent', () => {
  let component: LinealCuadraticoComponent;
  let fixture: ComponentFixture<LinealCuadraticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealCuadraticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealCuadraticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
