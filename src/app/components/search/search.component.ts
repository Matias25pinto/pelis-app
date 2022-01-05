import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculas: any[];
  buscarTexto: string = "";
  loading: boolean;
  nopeliculas: boolean;

  constructor(private peliculasService: PeliculasService,
              private activeRoutes: ActivatedRoute,
              private router: Router) { 
    this.loading = false;
    this.nopeliculas = false;


    this.activeRoutes.params.subscribe( params => {
      if(params['buscar']){
        this.buscarTexto = params['buscar'];
        this.buscarPelicula();
      }
    });

   
  }

  ngOnInit(): void {

    
  }

  buscarPelicula(){
    this.nopeliculas = false;
    this.loading = true;
    
    this.peliculasService.getSearch( this.buscarTexto ).subscribe( (data:any) =>{
      
      this.loading = false;
     
      this.peliculas = data.results;

      if (this.peliculas.length == 0) {
        this.nopeliculas = true;
      }
      
    },
    ()=>{
      this.loading = false;
      this.nopeliculas = true;
      console.log('ocurrio un error');
    });
  }

  verPelicula( id:number ){
    this.router.navigate(['/pelicula', id ,'search']);
  }

}
