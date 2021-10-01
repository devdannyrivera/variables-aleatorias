import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicadorConstanteComponent } from './multiplicador-constante.component';

describe('MultiplicadorConstanteComponent', () => {
  let component: MultiplicadorConstanteComponent;
  let fixture: ComponentFixture<MultiplicadorConstanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicadorConstanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicadorConstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
