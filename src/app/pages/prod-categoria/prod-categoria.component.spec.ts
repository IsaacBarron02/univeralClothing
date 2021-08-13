import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCategoriaComponent } from './prod-categoria.component';

describe('ProdCategoriaComponent', () => {
  let component: ProdCategoriaComponent;
  let fixture: ComponentFixture<ProdCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
