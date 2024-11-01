import { Component } from '@angular/core';
import { SectionsModule } from '../../components/sections/sections.module';

@Component({
  selector: 'pages-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ SectionsModule ]
})
export class HomeComponent {


}
