import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./router/').then((r) => r.AuthRouter),
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./page/').then((p) => p.SignInPage),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./page/').then((p) => p.SignUpPage),
      },
      {
        path: 'me',
        loadComponent: () => import('./page/').then((p) => p.MePage),
      },
    ],
  },
];
