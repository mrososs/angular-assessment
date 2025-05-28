import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/product-list-page/product-list-page.component').then(
            (m) => m.ProductListPageComponent
          ),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import(
            './pages/product-details-page/product-details-page.component'
          ).then((m) => m.ProductDetailsPageComponent),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
