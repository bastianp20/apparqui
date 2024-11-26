import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApoyoeconomicoPageRoutingModule } from './apoyoeconomico-routing.module';

import { ApoyoeconomicoPage } from './apoyoeconomico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApoyoeconomicoPageRoutingModule
  ],
  declarations: [ApoyoeconomicoPage]
})
export class ApoyoeconomicoPageModule {}
