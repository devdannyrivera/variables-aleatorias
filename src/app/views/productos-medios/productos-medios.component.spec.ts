import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMediosComponent } from './productos-medios.component';

describe('ProductosMediosComponent', () => {
  let component: ProductosMediosComponent;
  let fixture: ComponentFixture<ProductosMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosMediosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
