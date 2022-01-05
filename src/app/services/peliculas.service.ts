import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = '01d2396b9494bccbf9dcbf8ee2d63b23';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
 

  constructor(private http: HttpClient) { 

  }

  getActual(){
     let desde = new Date(2014,9,15);
     let hasta = new Date(2014,9,15);

     hasta.setDate( desde.getDate() + 7 );//se suma 7 dias a hasta desde la fecha desde, asi se obtiene los 7 dias

     let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${desde.getDate()}`;//Js maneja los meses desde 0 por eso en month se usa + 1
     let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${hasta.getDate()}`;
    console.log(desdeStr);
    console.log(hastaStr);
     let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&popular&api_key=${ this.apikey }&language=es-US&page=1`;
    
     return this.http.get( url );
    }

  getPopulares(){
    let url = `${ this.urlMoviedb }/movie/popular?api_key=${ this.apikey }&language=es-US&page=1`;

    return this.http.get( url );
  }


  getSearch( query: string){
    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&language=es-US&query=${ query }&page=1&include_adult=false`;
    return this.http.get( url );//hace la peticion http usando get esto devuelve un observable
  }

  getPopularesKids(){
    let url = `${ this.urlMoviedb }/discover/movie/?api_key=${ this.apikey }&certification_country=US&certification=R&sort_by=vote_average.desc`;

      return this.http.get( url );
  }

  getPelicula( id:number ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=en-US`;

    return this.http.get( url );
  }

}
