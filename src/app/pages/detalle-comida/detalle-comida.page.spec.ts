import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleComidaPage } from './detalle-comida.page';

describe('DetalleComidaPage', () => {
  let component: DetalleComidaPage;
  let fixture: ComponentFixture<DetalleComidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
