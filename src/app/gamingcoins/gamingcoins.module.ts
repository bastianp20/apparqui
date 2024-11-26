import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamingcoinsPageRoutingModule } from './gamingcoins-routing.module';

import { GamingcoinsPage } from './gamingcoins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamingcoinsPageRoutingModule
  ],
  declarations: [GamingcoinsPage]
})
export class GamingcoinsPageModule {}
