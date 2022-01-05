import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPeliculasComponent } from './tarjeta-peliculas.component';

describe('TarjetaPeliculasComponent', () => {
  let component: TarjetaPeliculasComponent;
  let fixture: ComponentFixture<TarjetaPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
