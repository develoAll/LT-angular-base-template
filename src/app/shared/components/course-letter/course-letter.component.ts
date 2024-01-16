import { Component, Input } from '@angular/core';
import { CardCourse } from '../../models/request/course-letter-request';
import { MatDialog } from '@angular/material/dialog';
import { CardHomeCourseComponent } from '../../../modules/pages/popups/card-home-course/card-home-course.component';
import { CardCareer } from '../../models/response/carrer-card-response.interface';

@Component({
  selector: 'app-course-letter',
  standalone: true,
  imports: [],
  templateUrl: './course-letter.component.html',
  styleUrl: './course-letter.component.scss'
})
export class CourseLetterComponent {

  @Input() listCardTempalte: CardCareer = {} as CardCareer;

  constructor(
    private _dialog: MatDialog
  ) {}

  detailCardPopup(){
    this._dialog.open(CardHomeCourseComponent, {
      // disableClose: false,
      data: this.listCardTempalte,
      // width: '',
      // height: ''
    }).afterClosed().subscribe(result => {
      if (result == true) {
        // console.log("Hola mundo");     
      }else{
        // console.log("hola rata");
      }
    })
  }
}
