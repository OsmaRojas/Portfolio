import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { PLANETS, PlanetMeta } from './planets.config';
import { SpaceshipService } from './spaceship.service';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.scss']
})
export class UniverseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private planets: THREE.Object3D[] = [];

  constructor(private ship: SpaceshipService) {}

  ngAfterViewInit(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas.nativeElement, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.canvas.nativeElement.style.position = 'fixed';
    this.canvas.nativeElement.style.inset = '0';
    this.canvas.nativeElement.style.zIndex = '0';

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.ship.registerCamera(this.camera);

    if (!this.renderer.capabilities.isWebGL2) {
      this.canvas.nativeElement.style.display = 'none';
      (this.canvas.nativeElement.parentElement as HTMLElement).style.backgroundImage = 'url(assets/textures/starfield.gif)';
      (this.canvas.nativeElement.parentElement as HTMLElement).style.backgroundSize = 'cover';
      return;
    }

    // starfield
    const starGeo = new THREE.BufferGeometry();
    const starVerts = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      starVerts[i * 3] = (Math.random() - 0.5) * 2000;
      starVerts[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      starVerts[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starVerts, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff });
    this.scene.add(new THREE.Points(starGeo, starMat));

    const loader = new THREE.TextureLoader();
    PLANETS.forEach(meta => {
      const geometry = new THREE.SphereGeometry(meta.radius, 32, 32);
      const material = new THREE.MeshBasicMaterial({ map: loader.load(meta.textureUrl) });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(meta.position);
      mesh.userData = meta;
      this.scene.add(mesh);
      this.ship.registerPlanet(meta, mesh);
      this.planets.push(mesh);
    });

    this.canvas.nativeElement.addEventListener('pointerdown', this.onPointerDown);

    const animate = () => {
      requestAnimationFrame(animate);
      this.ship.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  ngOnDestroy() {
    this.canvas.nativeElement.removeEventListener('pointerdown', this.onPointerDown);
  }

  private onPointerDown = (event: PointerEvent) => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.planets);
    if (hits.length) {
      const meta = hits[0].object.userData as PlanetMeta;
      this.ship.flyTo(meta.id);
    }
  };
}
