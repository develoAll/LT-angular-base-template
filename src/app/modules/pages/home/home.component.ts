import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { CourseLetterComponent } from '../../../shared/components/course-letter/course-letter.component';
import { NgOptimizedImage } from '@angular/common';
import { CardCareer } from '../../../shared/models/response/carrer-card-response.interface';
import { CareerService } from '../../../shared/services/career.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseResponse } from '../../../shared/models/response/course-response.interface';
import { CoursesService } from '../../../shared/services/courses.service';
import { NotImageDirective } from '../../../shared/directives/not-image.directive';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonComponentsModule, CourseLetterComponent, NgOptimizedImage, NotImageDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  cardTempalte: CardCareer[] = [];
  listCourse: CourseResponse[] = []

  constructor(
    private _careerService: CareerService,
    private _coursesService: CoursesService,
    private spinner: NgxSpinnerService
  ){
    this.getCardCareers()
    this.getAllCourse()
  }


  getCardCareers(){
    this.spinner.show();
    this._careerService.getAllCareer().subscribe( (response) => {
      this.cardTempalte = response.data;
      this.spinner.hide();
    })
  }

  getAllCourse(){
    this._coursesService.getAllCourses().subscribe( (response) => {
      this.listCourse = response.data;
    })
  }


}
