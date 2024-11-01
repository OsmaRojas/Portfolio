import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shared-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit{

  images = [
    './assets/img-1.webp',
    './assets/img-2.webp',
    './assets/img-3.webp',
  ];

  intervalId : any;
  currentIndex = 0;

  constructor() {}

  ngOnInit() {
    this.autoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex === 0 ? this.images.length : this.currentIndex) - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  autoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

}
