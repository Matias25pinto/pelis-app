import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populares: any[];
  kids: any[];
  estrenos: any[];


  constructor(private peliculasService: PeliculasService,
             private router: Router) { 

  }

  ngOnInit(): void {
    //getPopulares() devuelve un observable por lo tanto me debo subscribir a el
    this.peliculasService.getPopulares().subscribe( (data:any) => {
      //dentro del observable cargo el arreglo
      
      this.populares = data.results;
    });

    this.peliculasService.getPopularesKids().subscribe((data:any)=>{
      
      this.kids = data.results;
    });

    this.peliculasService.getActual().subscribe( (data:any)=>{
      this.estrenos = data.results;
    });

  }

}
