import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'section-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit, OnDestroy {

  about_me = ['ingeniero', 'programador', 'creativo', 'emprendedor', 'innovador', 'visionario'];
  currentIndex = 0;
  intervalId: any;
  iam = this.about_me[Math.random() * this.about_me.length | 0];

  constructor() {}

  ngOnInit() {
    // this.intervalId = setInterval(() => {
    //   this.iam = '';
    //   this.iam = this.about_me[Math.random() * this.about_me.length | 0];
    // }, 100);
    this.about_me.forEach(element => {
      this.iam = this.about_me[Math.random() * this.about_me.length | 0];
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
