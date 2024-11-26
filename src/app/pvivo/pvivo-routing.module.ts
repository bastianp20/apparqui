import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvivoPage } from './pvivo.page';

const routes: Routes = [
  {
    path: '',
    component: PvivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvivoPageRoutingModule {}
