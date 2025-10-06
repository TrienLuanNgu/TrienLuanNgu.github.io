import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightPipe } from '../highlight.pipe';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HighlightPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(){}
  // Terms to highlight within the long description
  highlightTerms: string[] = ['TypeScript', 'RxJS', 'SVG', 'MVC/FRP', 'CSV', 'Vite', 'pure'];
  projects: Project[] = [
    {
      id: 'flappy-birb',
      title: 'Flappy Birb',
      short: 'A fun Flappy Birb FRP Game',
      long: 'This TypeScript + Vite project implements a Flappy Bird–style game rendered in SVG using ' + 
       'an MVC/FRP approach. The Model is a pure, immutable State (bird, pipes, score, timers) advanced by Action' +
       'classes via a reducer; collisions use AABB and tunable physics constants. The View constructs and updates SVG elements efficiently,'+
       ' including a ghost replay layer that replays prior runs. The Controller is composed with RxJS Observables: keyboard '+
       'streams (Space to jump, R to start), fixed-interval ticks for gravity/time/pipe movement, and a CSV‑driven level timeline. '+
       'A small CSV defines each pipe’s gap, height, and delay; it’s fetched at runtime and mapped to scheduled CreatePipe actions. '+
       'All streams merge and scan into a State observable, then a single render sink updates the DOM. Tooling includes vite-plugin-checker '+
       'for TypeScript diagnostics. The result is a clean, testable architecture with deterministic gameplay and responsive animations.',
      tech: ['TypeScript', 'Vite', 'RxJS Observable', 'SVG', 'MVC/FRP'],
      tags: ['web', 'Programming Paradigms', 'RxJS Observable', 'SVG', 'MVC/FRP'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { demo: 'https://trienluanngu.github.io/Flappy-Birb/', repo: 'https://github.com/TrienLuanNgu/Flappy-Birb' },
      date: '2025-09',
      featured: true
    },

    {
      id: 'nutrition-app',
      title: 'Nutrition AI',
      short: 'A fun Flappy Birb FRP Game',
      long: '',
      tech: ['TypeScript', 'Vite', 'Observable'],
      tags: ['web', 'Programming Paradigms'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { demo: 'https://example.com', repo: 'https://github.com/...' },
      date: '2025-09',
      featured: true
    }
    
  ]

  selected: Project | null = null;
  open (p: Project) {this.selected = p;}
  close (){this.selected = null;}
}
