import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./system/system.routes').then((m) => m.systemRoutes satisfies Routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes satisfies Routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
