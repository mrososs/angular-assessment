import { Routes } from '@angular/router';
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component';
import { authGuard } from '../core/guards/auth.guard';

export const systemRoutes: Routes = [
  {
    path: '',
    component: SystemLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'buttons',
        loadComponent: () =>
          import('../system/pages/buttons/buttons.component').then(
            (m) => m.ButtonsComponent
          ),
      },
      {
        path: 'inputs',
        loadComponent: () =>
          import('../system/pages/input-page/input-page.component').then(
            (m) => m.InputPageComponent
          ),
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('../shared/components/card/card.component').then(
            (m) => m.CardComponent
          ),
      },

      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
    ],
  },
];
