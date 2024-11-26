import { Component } from '@angular/core';

@Component({
  selector: 'app-apoyoeconomico',
  templateUrl: './apoyoeconomico.page.html',
  styleUrls: ['./apoyoeconomico.page.scss'],
})
export class ApoyoeconomicoPage {
  montoPersonalizado: number | null = null;
  mensaje: string = '';
  historial: string[] = [];

  seleccionarMonto(monto: number): void {
    this.montoPersonalizado = monto;
  }

  confirmarDonacion(): void {
    const donacion = this.montoPersonalizado
      ? `$${this.montoPersonalizado} - ${this.mensaje || 'Sin mensaje'}`
      : 'Monto no especificado';
    
    this.historial.push(donacion);
    this.montoPersonalizado = null;
    this.mensaje = '';
    alert('¡Gracias por tu apoyo!');
  }
}
