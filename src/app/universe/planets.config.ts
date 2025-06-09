import * as THREE from 'three';

export interface PlanetMeta {
  id: string;
  route: string;
  position: THREE.Vector3;
  radius: number;
  textureUrl: string;
}

export const PLANETS: PlanetMeta[] = [
  { id: 'about', route: 'home#about', position: new THREE.Vector3(0, 0, -20), radius: 2, textureUrl: 'assets/textures/about.jpg' },
  { id: 'skills', route: 'home#skills', position: new THREE.Vector3(20, 0, -40), radius: 2, textureUrl: 'assets/textures/skills.jpg' },
  { id: 'projects', route: 'home#projects', position: new THREE.Vector3(-20, 0, -60), radius: 2, textureUrl: 'assets/textures/projects.jpg' },
  { id: 'education', route: 'home#education', position: new THREE.Vector3(20, 0, -80), radius: 2, textureUrl: 'assets/textures/education.jpg' },
  { id: 'contact', route: 'home#contact', position: new THREE.Vector3(0, 0, -100), radius: 2, textureUrl: 'assets/textures/contact.jpg' }
];
