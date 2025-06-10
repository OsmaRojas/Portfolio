import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UniverseComponent } from './universe.component';

const routes: Routes = [
  { path: '', component: UniverseComponent, children: [
      { path: 'home', loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [UniverseComponent],
  exports: [UniverseComponent]
})
export class UniverseModule {}
