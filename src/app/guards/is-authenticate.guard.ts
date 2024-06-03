import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStatus } from 'app/interfaces/AuthStattusEnum';
import { AuthService } from 'app/services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService._authStatus == AuthStatus.authenticate) {
    return true
  }

  router.navigateByUrl('/pages/login')
  return false;
};
