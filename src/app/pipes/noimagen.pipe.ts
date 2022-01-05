import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(link: string): string {

    //recibimos el link de imagen sabemos que el link tiene una longitud de 34 si es null por lo tanto cualquier link superior a esa longitud tiene portada
    if (link) {
      
      return 'https://image.tmdb.org/t/p/w500'+link;
    }else{
     
      return 'assets/img/noimage.jpg';
    }
  }

}
