import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginForm, UserToken } from '../../models/user';
import { AuthUser } from '../../services/authUser/auth-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private readonly _formBuilder: FormBuilder = inject(FormBuilder);  // inject formBuilder to generate a formGroup.
  private readonly _authUser: AuthUser = inject(AuthUser);  // inject the service.
  private readonly _router: Router = inject(Router);  // inject router, to navigate in pages.

  readonly connectedUser = this._authUser.connectedUser;  // passerelle for connectedUser.

  loginForm: FormGroup = this._formBuilder.group({
    login: ['', { validators: [Validators.required] }],
    password: ['', { validators: [Validators.required] }],
  });

  submit($event: SubmitEvent) {
    $event.preventDefault();

    this.loginForm.markAllAsTouched();  // simul user touch all, to refresh errors.

    if(this.loginForm.invalid){
      console.error(this.loginForm.errors);
      return;
    }

    let userLoginForm: UserLoginForm = {  // cast formGroup into UserLoginForm model (to not user 'as any').
      email: this.loginForm.get('login')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? '',
    }

    this._authUser.login(userLoginForm).subscribe({
      next: (response) => {
        console.log('form submit successfully.');
        this._router.navigate(['/']);  // back to home.
      },
      error: (error) => {
        console.error('form submit error !');
        console.error(error.name);
        console.error(error.message);
      }
    });

  }

  logout(){
    this._authUser.logout();
  }

}
