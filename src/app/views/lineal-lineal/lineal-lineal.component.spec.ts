import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealLinealComponent } from './lineal-lineal.component';

describe('LinealLinealComponent', () => {
  let component: LinealLinealComponent;
  let fixture: ComponentFixture<LinealLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealLinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
