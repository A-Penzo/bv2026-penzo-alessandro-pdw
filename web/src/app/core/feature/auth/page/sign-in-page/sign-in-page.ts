import { Component } from '@angular/core';
import { AuthHeader } from '@core/feature/auth/component/auth-header/auth-header';

@Component({
  imports: [AuthHeader],
  selector: 'app-sign-in-page',
  styleUrl: './sign-in-page.scss',
  templateUrl: './sign-in-page.html',
})
export class SignInPage {}
