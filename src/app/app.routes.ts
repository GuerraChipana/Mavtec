import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.PAGES_ROUTES),
  },
];
