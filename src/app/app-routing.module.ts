import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apoyoeconomico',
    loadChildren: () => import('./apoyoeconomico/apoyoeconomico.module').then( m => m.ApoyoeconomicoPageModule)
  },
  {
    path: 'gamingcoins',
    loadChildren: () => import('./gamingcoins/gamingcoins.module').then( m => m.GamingcoinsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pvivo',
    loadChildren: () => import('./pvivo/pvivo.module').then( m => m.PvivoPageModule)
  },
  {
    path: 'suscripciones',
    loadChildren: () => import('./suscripciones/suscripciones.module').then( m => m.SuscripcionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
