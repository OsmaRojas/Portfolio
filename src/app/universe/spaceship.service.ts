import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as THREE from 'three';
import gsap from 'gsap';
import { filter } from 'rxjs';
import { PlanetMeta } from './planets.config';

@Injectable({ providedIn: 'root' })
export class SpaceshipService {
  private camera?: THREE.PerspectiveCamera;
  private planets = new Map<string, THREE.Object3D>();
  private offset = new THREE.Vector3(0, 0, 5);
  private driftFn?: () => void;
  private current?: string;

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.startDrift());
  }

  registerCamera(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.startDrift();
  }

  registerPlanet(meta: PlanetMeta, mesh: THREE.Object3D) {
    this.planets.set(meta.id, mesh);
  }

  at(id: string): boolean {
    return this.current === id;
  }

  flyTo(id: string) {
    const planet = this.planets.get(id);
    if (!planet || !this.camera) { return; }
    this.stopDrift();
    const target = planet.position.clone().add(this.offset);
    gsap.to(this.camera.position, { duration: 2, x: target.x, y: target.y, z: target.z, onUpdate: () => {
      this.camera!.lookAt(planet.position);
    }, onComplete: () => {
      const meta = planet.userData as PlanetMeta;
      this.current = id;
      this.router.navigateByUrl('/' + meta.route);
    }});
  }

  update() {
    if (this.driftFn) {
      this.driftFn();
      this.camera?.lookAt(0,0,0);
    }
  }

  private startDrift() {
    if (!this.camera || this.driftFn) return;
    this.driftFn = () => {
      const t = Date.now() * 0.0001;
      this.camera!.position.x = Math.sin(t) * 10;
      this.camera!.position.z = Math.cos(t) * 10;
    };
  }

  private stopDrift() {
    this.driftFn = undefined;
  }
}
