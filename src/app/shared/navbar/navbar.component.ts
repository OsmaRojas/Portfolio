import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  appRoutes = routes.filter(route => route.title);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  // Función para verificar si la ruta y el fragmento están activos
  activeRoute(path: string, fragment?: string): boolean {
    const isActivePath = this.router.url.includes(path);
    const isActiveFragment = fragment ? this.route.snapshot.fragment === fragment : true;
    return isActivePath && isActiveFragment;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
