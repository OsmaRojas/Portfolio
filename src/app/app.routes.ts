import { Route } from '@angular/router';

interface CustomRoute extends Route {
  fragments?: { fragment: string; title: string }[];
}

export const routes: CustomRoute[] = [
  {
    path: '',
    loadChildren: () => import('./universe/universe.module').then(m => m.UniverseModule),
    data: { preload: false }
  },
  { path: '**', redirectTo: '' }
];
