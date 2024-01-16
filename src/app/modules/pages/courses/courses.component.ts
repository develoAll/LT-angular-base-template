import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { register } from 'swiper/element/bundle';
import { NotImageDirective } from '../../../shared/directives/not-image.directive';
import { CoursesService } from '../../../shared/services/courses.service';
import { CourseResponse } from '../../../shared/models/response/course-response.interface';
register();

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonComponentsModule, NotImageDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  listCourse: CourseResponse[] = []

  constructor(
    private _coursesService: CoursesService
  ){
    this.getAllCourse()
  }

  getAllCourse(){
    this._coursesService.getAllCourses().subscribe( (response) => {
      this.listCourse = response.data
    })
  }

}
