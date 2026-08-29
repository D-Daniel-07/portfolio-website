import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: Hero,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
