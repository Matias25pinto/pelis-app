import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-peliculas',
  templateUrl: './tarjeta-peliculas.component.html',
  styleUrls: ['./tarjeta-peliculas.component.css']
})
export class TarjetaPeliculasComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verPelicula( id:number, ubicacion: string ){
    this.router.navigate(['/pelicula', id , ubicacion]);
  }

}
