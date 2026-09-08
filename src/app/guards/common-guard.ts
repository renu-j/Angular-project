import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export const contactGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  if (apiService.isContactAllowed()) {
    return true;
  }

  router.navigate(['/denied']);
  return false;
};