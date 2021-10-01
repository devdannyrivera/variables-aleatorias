import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealAditivoComponent } from './lineal-aditivo.component';

describe('LinealAditivoComponent', () => {
  let component: LinealAditivoComponent;
  let fixture: ComponentFixture<LinealAditivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealAditivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealAditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
