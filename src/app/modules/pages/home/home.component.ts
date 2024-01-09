import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { CourseLetterComponent } from '../../../shared/components/course-letter/course-letter.component';
import { CardCourse } from '../../../shared/models/request/course-letter-request';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonComponentsModule, CourseLetterComponent, NgOptimizedImage],
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
        logo: "https://cdn.vox-cdn.com/thumbor/iaVMlcV5rj0OuPejZ7HyqYslLZk=/0x0:800x333/1400x788/filters:focal(334x72:462x200):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55278741/gatsby.0.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: 15
      },
      {
        logo: "https://www.socialpilot.co/wp-content/uploads/2023/02/gif.gif",
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
