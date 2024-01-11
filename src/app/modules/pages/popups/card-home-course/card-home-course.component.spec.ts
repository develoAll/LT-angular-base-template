import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeCourseComponent } from './card-home-course.component';

describe('CardHomeCourseComponent', () => {
  let component: CardHomeCourseComponent;
  let fixture: ComponentFixture<CardHomeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHomeCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHomeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
