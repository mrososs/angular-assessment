import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const guestGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
  const storage = inject(StorageService);

  const user = storage.getItem('username');

  return user ? router.createUrlTree(['/']) : true;
};
