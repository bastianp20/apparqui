import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApoyoeconomicoPage } from './apoyoeconomico.page';

const routes: Routes = [
  {
    path: '',
    component: ApoyoeconomicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApoyoeconomicoPageRoutingModule {}
