import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./system/system.routes').then((m) => m.systemRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
