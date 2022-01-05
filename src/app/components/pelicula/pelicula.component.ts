import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

 

   titulo: string;
   sinopsis: string;
   fecha: Date;
   poster: string;
   ubicacion: string;
   buscarTexto: string;

  constructor(private peliculasService: PeliculasService,
              private activeRoute: ActivatedRoute,
              private router: Router) { 

              }

  ngOnInit(): void {

    this.activeRoute.params.subscribe( param => {

      this.ubicacion = param['ubicacion'];
      this.buscarTexto = param['buscarTexto'];

      
      this.peliculasService.getPelicula(param['id']).subscribe( (data:any) => {
       
       
        if( data.poster_path ){
          this.poster = data.poster_path;
        }else{
          this.poster = data.backdrop_path;
        }

        this.titulo = data.title;
        this.sinopsis = data.overview;
        this.fecha = data.release_date;
      });

    },
    ()=>{
      console.log('ocurrio un error');
    });
  }

  regresar(){
    if(this.ubicacion == 'home'){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/search', this.buscarTexto]);
    }
  }

}
