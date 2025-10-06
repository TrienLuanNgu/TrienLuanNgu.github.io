import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ExperienceComponent, ProjectsComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  constructor() {}
}
