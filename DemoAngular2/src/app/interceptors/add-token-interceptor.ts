import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthUser } from '../services/authUser/auth-user';
import { inject } from '@angular/core';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService: AuthUser = inject(AuthUser);

  if (!authService.connectedUser())  // if user no connected.
    return next(req);  // skip.

  let clone = req.clone({  // clone request, to add token in header.
    setHeaders: {
      Authorization: `Bearer ${authService.connectedUser()!.accessToken}`,
      //Test: "HELLO TEST -------------->>>",
    },
  });

  return next(clone);  // send to next injectors.
  
};
