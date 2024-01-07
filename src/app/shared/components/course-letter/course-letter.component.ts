import { Component, Input } from '@angular/core';
import { CardCourse } from '../../models/request/course-letter-request';

@Component({
  selector: 'app-course-letter',
  standalone: true,
  imports: [],
  templateUrl: './course-letter.component.html',
  styleUrl: './course-letter.component.scss'
})
export class CourseLetterComponent {

  // listCardTempalte: CardCourse = {} as CardCourse;

  @Input() listCardTempalte: CardCourse = {} as CardCourse;

  constructor() {}
}
