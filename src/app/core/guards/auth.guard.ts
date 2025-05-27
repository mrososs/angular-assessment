import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);
  const storage = inject(StorageService);

  const user = storage.getItem('username');

  return user ? true : router.createUrlTree(['/auth/login']);
};
