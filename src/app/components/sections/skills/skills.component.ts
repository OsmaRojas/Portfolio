import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from "../../../universe/spaceship.service";

@Component({
  selector: 'section-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {

  constructor(public ship: SpaceshipService) { }

}
