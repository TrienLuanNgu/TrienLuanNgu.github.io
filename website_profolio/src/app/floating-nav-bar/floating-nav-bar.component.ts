import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-floating-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './floating-nav-bar.component.html',
  styleUrl: './floating-nav-bar.component.css'
})
export class FloatingNavBarComponent implements AfterViewInit {
  @ViewChild('bar') bar!: ElementRef<HTMLElement>;
  constructor() {}
  ngAfterViewInit(): void {
    const h = this.bar.nativeElement.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-height', `${h}px`);
  }
}
