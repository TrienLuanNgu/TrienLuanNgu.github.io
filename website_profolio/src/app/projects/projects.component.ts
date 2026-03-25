import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightPipe } from '../highlight.pipe';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HighlightPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(){}
  // Terms to highlight within the long description
  projects: Project[] = [
    {
      id: 'flappy-birb',
      title: 'Flappy Birb',
      short: 'A fun Flappy Birb FRP Game',
      long: "- This TypeScript + Vite project implements a Flappy Bird-style game rendered in SVG using " + 
       "an MVC/FRP approach.\n- The Model is a pure, immutable State (bird, pipes, score, timers) advanced by Action" +
       "classes via a reducer; collisions use AABB and tunable physics constants.\n- The View constructs and updates SVG elements efficiently,"+
       " including a ghost replay layer that replays prior runs.\n- The Controller is composed with RxJS Observables: keyboard "+
       "streams (Space to jump, R to start), fixed-interval ticks for gravity/time/pipe movement, and a CSV-driven level timeline. "+
       "\n- A small CSV defines each pipe's gap, height, and delay; it's fetched at runtime and mapped to scheduled CreatePipe actions. "+
       "\n- All streams merge and scan into a State observable, then a single render sink updates the DOM. Tooling includes vite-plugin-checker "+
       "for TypeScript diagnostics.\n- The result is a clean, testable architecture with deterministic gameplay and responsive animations.",
      tech: ['TypeScript', 'Vite', 'RxJS Observable', 'SVG', 'MVC/FRP'],
      tags: ['web', 'Programming Paradigms', 'RxJS Observable', 'SVG', 'MVC/FRP'],
      highlightTerms: ['TypeScript', 'RxJS Observable', 'SVG', 'MVC/FRP', 'CSV', 'Vite', 'pure'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { demo: 'https://trienluanngu.github.io/Flappy-Birb/', repo: 'https://github.com/TrienLuanNgu/Flappy-Birb' },
      date: '2025-09',
      featured: true
    },

    {
      id: 'nutriticoach-app',
      title: 'NutriCoach (Mobile Application)',
      short: '- A Mobile Health Tracking App \n- An Android app that turns simple food logs into clear HEIFA-style insights, trends.',
      long: "- NutriCoach helps users understand and improve daily eating patterns with low-friction logging and meaningful feedback." + 
            "\n- Entries are stored in Room, then scored to produce HEIFA-style insights (balance, variety, areas to improve)." + 
            "\n- The MVVM architecture keeps UI and logic clean: Jetpack Compose handles a smooth, modern UI; Coroutines/Flow power reactive state and charts; Retrofit integrates services." + 
            "\n- For coaching, the app can call a Google Cloud GenAI API as well as a Fruit API to generate informations about the fruit (such as Calories, Family of the fruit, ect), and give you Coaching and Encourage texts based onto your personal HEIFA food intake in the database",
      tech: ['Kotlin', 'MVVM', 'Room', 'Google Cloud Gemini API','Jetpack Compose', 'Coroutines/Flow', 'Retrofit', 'Material 3'],
      tags: ['Kotlin', 'MVVM', 'Room', 'Coroutines/Flow', 'Retrofit', 'Google Cloud GenAI API', 'Material 3'],
      highlightTerms: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Coroutines/Flow', 'Retrofit', 'Google Cloud GenAI API', 'Material 3'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { repo: 'https://github.com/TrienLuanNgu/NutriCoach' },
      date: '2025-09',
      featured: true
    }
    
  ]

  selected: Project | null = null;
  open (p: Project) {this.selected = p;}
  close (){this.selected = null;}
}
