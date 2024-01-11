import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardCourse } from '../../../../shared/models/request/course-letter-request';

@Component({
  selector: 'app-card-home-course',
  standalone: true,
  imports: [],
  templateUrl: './card-home-course.component.html',
  styleUrl: './card-home-course.component.scss'
})
export class CardHomeCourseComponent {

  constructor(
    private _matDialogRef: MatDialogRef<CardHomeCourseComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: CardCourse
  ){
    
  }

}
