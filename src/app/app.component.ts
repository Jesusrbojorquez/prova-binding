import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-binding';
  isValid = false;/**cuando es falso muestra lo que esta dentro de el tag span */
  textValue = "";
  shippingAddress="";
  
  onClick(){
    this.isValid = !this.isValid;
  }

  onInput(event){
    console.log(event);
    this.textValue = event.target.value;
}
}
