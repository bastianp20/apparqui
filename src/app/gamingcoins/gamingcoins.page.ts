import { Component } from '@angular/core';

@Component({
  selector: 'app-gamingcoins',
  templateUrl: './gamingcoins.page.html',
  styleUrls: ['./gamingcoins.page.scss'],
})
export class GamingcoinsPage {
  historial: { fecha: string; monto: number }[] = [];

  comprarCoins(monto: number) {
    const fecha = new Date().toLocaleString();
    this.historial.push({ fecha, monto });
    alert(`¡Has comprado ${monto} Gaming Coins!`);
  }
}
