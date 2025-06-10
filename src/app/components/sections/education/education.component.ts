import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from "../../../universe/spaceship.service";

@Component({
  selector: 'section-education',
  templateUrl: './education.component.html',
})
export class EducationComponent implements OnInit {

  constructor(public ship: SpaceshipService) { }

  ngOnInit() {
  }

}
