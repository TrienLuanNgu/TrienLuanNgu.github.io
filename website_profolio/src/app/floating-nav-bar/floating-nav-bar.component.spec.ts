import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNavBarComponent } from './floating-nav-bar.component';

describe('FloatingNavBarComponent', () => {
  let component: FloatingNavBarComponent;
  let fixture: ComponentFixture<FloatingNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
