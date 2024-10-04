import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comidas',
    loadChildren: () => import('./pages/comidas/comidas.module').then( m => m.ComidasPageModule)
  },
  {
    path: 'detalle-comida',
    loadChildren: () => import('./pages/detalle-comida/detalle-comida.module').then( m => m.DetalleComidaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
