import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { UserLoginForm, User, UserToken } from '../../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUser {

  private readonly _http: HttpClient = inject(HttpClient);

  connectedUser: WritableSignal<UserToken | undefined>;  // bether in store.

  constructor() {
    let user: string | null = localStorage.getItem('connectedUser');
    let userLoginResponse: UserToken | undefined = user ? JSON.parse(user) as UserToken : undefined;
    this.connectedUser = signal(userLoginResponse);
  }

  login(form : UserLoginForm) {

    return this._http
      .post<UserToken>('http://localhost:3000/login', form)
      .pipe(  // execute after, if success.
        tap((res) => {
          this.connectedUser.set(res);
          localStorage.setItem('connectedUser', JSON.stringify(res));
        })
      );

  }
  logout() {
      this.connectedUser.set(undefined);
      localStorage.removeItem('connectedUser');
  }

}
