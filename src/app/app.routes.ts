
import { Route, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};
interface CustomRoute extends Route {
  fragments?: { fragment: string, title: string }[];
}

// Define las rutas usando la interfaz extendida
export const routes: CustomRoute[] = [
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    fragments: [
      { fragment: 'about', title: 'Acerca de mí' },
      { fragment: 'skills', title: 'Habilidades' },
      { fragment: 'projects', title: 'Proyectos' },
      { fragment: 'education', title: 'Educación' },
      { fragment: 'contact', title: 'Contacto' }
    ]
  }
];
