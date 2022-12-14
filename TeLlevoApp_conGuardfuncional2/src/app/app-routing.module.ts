import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { RutaProtegidaGuard } from './guards/ruta-protegida.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'olvide',
    loadChildren: () => import('./olvide/olvide.module').then( m => m.OlvidePageModule)
  },
  {
    path: 'organizar',
    loadChildren: () => import('./organizar/organizar.module').then( m => m.OrganizarPageModule),
    canLoad:[AuthLoginGuard]
  },
  {
    path: 'buscar-viaje',
    loadChildren: () => import('./buscar-viaje/buscar-viaje.module').then( m => m.BuscarViajePageModule),
    canActivate: [RutaProtegidaGuard]
  },
  {
    path: '**', /* TIENE QUE IR AL FINAL DE LOS PATHS PQ SINO LOS PATH QUE ESTÉN DEBAJO NO FUNCIONAN */
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
