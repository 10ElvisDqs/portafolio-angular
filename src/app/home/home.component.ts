import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = {
    name: 'Elvis D. Quinteros Siles',
    image: 'assets/profile.jpg'  // Ruta a la imagen de perfil
  };

}
