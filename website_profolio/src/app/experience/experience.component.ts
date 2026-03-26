import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor() {}

  skillGroups = [
    {
      title: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'HTML', 'CSS']
    },
    {
      title: 'Web And Software Development',
      items: ['Angular', 'Node.js', 'MongoDB', 'Django', 'Full-stack development', 'Software development']
    },
    {
      title: 'Mobile Development',
      items: ['Android development', 'iOS development', 'Jetpack Compose', 'Mobile app architecture']
    },
    {
      title: 'Working Style',
      items: ['Teamwork', 'Problem-solving', 'Hardworking', 'Attention to detail', 'Fast learner', 'Customer-focused thinking']
    }
  ];
}
