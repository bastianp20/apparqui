import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvivoPageRoutingModule } from './pvivo-routing.module';

import { PvivoPage } from './pvivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvivoPageRoutingModule
  ],
  declarations: [PvivoPage]
})
export class PvivoPageModule {}
