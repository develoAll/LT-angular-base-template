import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { CourseLetterComponent } from '../../../shared/components/course-letter/course-letter.component';
import { CardCourse } from '../../../shared/models/request/course-letter-request';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonComponentsModule, CourseLetterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cardTempalte: CardCourse[] = [];

  constructor(){
    this.cardTempalte = [
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: 15
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: 15
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: 15
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: 15
      }
    ]
  }

}
