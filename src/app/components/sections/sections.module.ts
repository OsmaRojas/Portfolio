import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ModalComponent } from '../../shared/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselComponent,
    ModalComponent
  ],
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  exports: [
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ]
})
export class SectionsModule { }
