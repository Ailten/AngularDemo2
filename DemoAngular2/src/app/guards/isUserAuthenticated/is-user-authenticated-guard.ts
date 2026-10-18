import { CanActivateFn, Router } from '@angular/router';
import { AuthUser } from '../../services/authUser/auth-user';
import { inject } from '@angular/core';

export const isUserAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authUser: AuthUser = inject(AuthUser);
  const router: Router = inject(Router);

  if(!authUser.connectedUser()){  // redirect home page when user is not authenticated.
    router.navigate(['/login']);
    return false;  // it not pass the guard.
  }

  return true;  // it pass the guard.
};
