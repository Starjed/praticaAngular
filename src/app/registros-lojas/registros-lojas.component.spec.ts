import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosLojasComponent } from './registros-lojas.component';

describe('RegistrosLojasComponent', () => {
  let component: RegistrosLojasComponent;
  let fixture: ComponentFixture<RegistrosLojasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosLojasComponent]
    });
    fixture = TestBed.createComponent(RegistrosLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
