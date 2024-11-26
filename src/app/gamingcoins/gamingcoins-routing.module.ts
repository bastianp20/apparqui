import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamingcoinsPage } from './gamingcoins.page';

const routes: Routes = [
  {
    path: '',
    component: GamingcoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamingcoinsPageRoutingModule {}
