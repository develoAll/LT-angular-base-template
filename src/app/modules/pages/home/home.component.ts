import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { CourseLetterComponent } from '../../../shared/components/course-letter/course-letter.component';
import { CardCourse } from '../../../shared/models/request/course-letter-request';
import { NgOptimizedImage } from '@angular/common';
import { CardCareer } from '../../../shared/models/response/carrer-card-response.interface';
import { CareerService } from '../../../shared/services/career.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonComponentsModule, CourseLetterComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cardTempalte: CardCareer[] = [];

  constructor(
    private _careerService: CareerService
  ){
    // this.cardTempalte = [
    //   {
    //     id: 1,
    //     image: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
    //     title: "Medicina",
    //     description: "probando",
    //     courses: [
    //       {
    //         id: 1,
    //         title: "Matematica"
    //       },
    //       {
    //         id: 2,
    //         title: "Fisica"
    //       },
    //       {
    //         id: 3,
    //         title: "sexologia"
    //       }
    //     ],
    //     students: [
    //       {
    //         id: 1,
    //         name: "Gonzalo"
    //       },
    //       {
    //         id: 2,
    //         name: "Jairo"
    //       },
    //       {
    //         id: 3,
    //         name: "Gilbert"
    //       }
    //     ]
    //   },
    // ]
    this.getCardCareers()
  }


  getCardCareers(){
    this._careerService.getAllCareer().subscribe( (response) => {
      this.cardTempalte = response.data
    })
  }


}
