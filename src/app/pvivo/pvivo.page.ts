import { Component } from '@angular/core';

@Component({
  selector: 'app-pvivo',
  templateUrl: './pvivo.page.html',
  styleUrls: ['./pvivo.page.scss'],
})
export class PvivoPage {
  private screenStream: MediaStream | null = null;

  // Método para iniciar la compartición de pantalla
  async startScreenShare() {
    try {
      this.screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const videoElement = document.getElementById('screenVideo') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = this.screenStream;
      }
    } catch (err) {
      console.error('Error al compartir pantalla:', err);
    }
  }

  // Método para detener la compartición de pantalla
  stopScreenShare() {
    if (this.screenStream) {
      this.screenStream.getTracks().forEach((track) => track.stop());
      this.screenStream = null;

      const videoElement = document.getElementById('screenVideo') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = null;
      }
    }
  }
}