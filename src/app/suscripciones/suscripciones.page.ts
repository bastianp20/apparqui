import { Component } from '@angular/core';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.page.html',
  styleUrls: ['./suscripciones.page.scss'],
})
export class SuscripcionesPage {
  suscripcionActiva = false; // Cambiar a true si hay una suscripción activa
  suscripcionActual = {
    nombre: 'Premium',
    fechaExpiracion: '30/12/2024',
  };

  planes = [
    {
      nombre: 'Básico',
      descripcion: 'Acceso a transmisiones estándar.',
      precio: 4.99,
    },
    {
      nombre: 'Pro',
      descripcion: 'Incluye transmisiones en HD y beneficios adicionales.',
      precio: 9.99,
    },
    {
      nombre: 'Premium',
      descripcion: 'Acceso completo a contenido exclusivo y más beneficios.',
      precio: 14.99,
    },
  ];

  historial: string[] = [];

  suscribirse(plan: any) {
    // Simulación de suscripción
    alert(`Te has suscrito al plan ${plan.nombre} por $${plan.precio}/mes.`);
    this.suscripcionActiva = true;
    this.suscripcionActual = {
      nombre: plan.nombre,
      fechaExpiracion: '30 días después de hoy',
    };
    this.historial.unshift(
      `Suscripción al plan ${plan.nombre} el ${new Date().toLocaleDateString()}`
    );
  }
}
