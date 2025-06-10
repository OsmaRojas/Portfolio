import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from "../../../universe/spaceship.service";

@Component({
  selector: 'section-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(public ship: SpaceshipService) { }

  ngOnInit() {
  }

}
