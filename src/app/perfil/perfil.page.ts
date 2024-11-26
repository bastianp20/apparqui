import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  user = {
    name: '',
    email: '',
    phone: '',
  };

  constructor() {}

  saveProfile() {
    console.log('Datos guardados:', this.user);
    // Aquí podrías enviar los datos al servidor o procesarlos como necesites.
  }
}
