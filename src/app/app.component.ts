import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasApp';

  constructor(){
    //getPopulares() devuelve un observable por lo tanto me debo subscribir a el
    
  }
}
