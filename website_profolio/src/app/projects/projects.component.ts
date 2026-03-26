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
      id: 'study-ai-in-progress',
      title: 'Study AI (In Active Development)',
      short: 'An in-progress project focused on building an AI-supported study experience that helps students learn more effectively and stay organised.',
      long: "- Study AI is a project currently in active development, centred on creating a smarter and more supportive study workflow for students." +
        "\n- The overall idea is to use AI to help with learning tasks such as organising study material, supporting revision, and making it easier for students to stay on top of their work." +
        "\n- The project is being shaped around usability, clarity, and practical value, with the goal of turning complex study tasks into a more structured and approachable experience." +
        "\n- It reflects my interest in combining product thinking with technical development to build tools that solve real day-to-day problems for users.",
      tech: ['AI Product Concept', 'Web Development', 'Product Design', 'Student Tools'],
      tags: ['in progress', 'ai', 'education', 'product'],
      highlightTerms: ['AI', 'study', 'students', 'organising', 'revision', 'product thinking'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      date: '2026-03',
      featured: true
    },

    {
      id: 'eventease-in-progress',
      title: 'EventEase (In Active Development)',
      short: 'An in-progress event platform concept designed to support university communities across Australia, making planning, managing, and joining events simpler and more accessible.',
      long: "- EventEase is a project currently in active development that focuses on improving the event experience for both organisers and attendees across Australian universities." +
        "\n- The core idea is to create a platform that can support university communities such as Monash, the University of Melbourne, and other campuses across Australia, making event planning feel more organised, efficient, and user-friendly from discovery through coordination and participation." +
        "\n- It is being developed with an emphasis on clear flows, practical features, and a smooth user experience so that event management feels less fragmented and easier to handle." +
        "\n- This project represents my interest in building digital products that solve coordination problems and turn everyday processes into something simpler and more reliable.",
      tech: ['Platform Design', 'Web Development', 'UX Thinking', 'Product Strategy'],
      tags: ['in progress', 'events', 'platform', 'product'],
      highlightTerms: ['event', 'organisers', 'attendees', 'platform', 'user experience', 'coordination'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      date: '2026-03',
      featured: true
    },

    {
      id: 'monash-delivery-app',
      title: 'Monash Delivery App Proposal Website',
      short: 'A concept website I built to present a delivery app idea to Monash and communicate the value of the platform clearly.',
      long: "- This project was built as part of presenting a delivery app idea to the school through a clear and structured website experience." +
        "\n- The goal was to explain the concept in a way that felt practical, easy to follow, and relevant to student needs on campus." +
        "\n- I focused on turning the idea into something visual and concrete so the proposal could be understood beyond just slides or written notes." +
        "\n- The project reflects my ability to take an early-stage concept and shape it into a polished web experience that supports communication, presentation, and product thinking.",
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Product Presentation'],
      tags: ['web', 'concept', 'school proposal', 'presentation'],
      highlightTerms: ['delivery app', 'school', 'website', 'proposal', 'product thinking'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { repo: 'https://github.com/TrienLuanNgu/Monash-Delivery-App' },
      date: '2025-09',
      featured: true
    },

    {
      id: 'guider-hackathon',
      title: 'Guider (Hackathon Project)',
      short: 'A hackathon project built under time pressure to turn an idea into a working product with a clear user focus.',
      long: "- Guider was developed as a hackathon project, where the focus was on moving quickly from idea to implementation while still delivering a usable product." +
        "\n- Working in a hackathon environment meant balancing speed, collaboration, and technical decision-making under a tight deadline." +
        "\n- The project demonstrates my ability to contribute in fast-paced team settings, adapt quickly, and help turn rough ideas into something presentable and functional." +
        "\n- It also reflects how I approach problem-solving when time is limited: prioritising core value, building what matters most first, and keeping the product direction clear.",
      tech: ['Hackathon', 'Team Collaboration', 'Rapid Prototyping', 'Product Thinking'],
      tags: ['hackathon', 'team project', 'rapid build'],
      highlightTerms: ['hackathon', 'team', 'rapid', 'product', 'problem-solving'],
      imageUrl: 'assets/flappy-birb-img.jpeg',
      links: { repo: 'https://github.com/WillyShaoZ/Guider' },
      date: '2025-09',
      featured: true
    },

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

  ];

  selected: Project | null = null;
  open (p: Project) {this.selected = p;}
  close (){this.selected = null;}
}
