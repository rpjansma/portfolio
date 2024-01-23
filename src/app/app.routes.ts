import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },


  {
    path: '**',
    component: NotFoundComponent
  }
];
