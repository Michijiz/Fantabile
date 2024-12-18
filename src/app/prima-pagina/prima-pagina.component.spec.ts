import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaPaginaComponent } from './prima-pagina.component';

describe('PrimaPaginaComponent', () => {
  let component: PrimaPaginaComponent;
  let fixture: ComponentFixture<PrimaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
