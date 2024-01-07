import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLetterComponent } from './course-letter.component';

describe('CourseLetterComponent', () => {
  let component: CourseLetterComponent;
  let fixture: ComponentFixture<CourseLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
