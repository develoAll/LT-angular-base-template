import { Component, OnInit } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotImageDirective } from '../../../shared/directives/not-image.directive';
import { CoursesService } from '../../../shared/services/courses.service';
import { CourseResponseCheckBox } from '../../../shared/models/response/course-response.interface';
import { CareerService } from '../../../shared/services/career.service';
import { CarrerWithCourses } from '../../../shared/models/request/carrer-request.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonComponentsModule, NotImageDirective ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit{

  registerForm: FormGroup;
  listCourses: CourseResponseCheckBox[] = []

  constructor(
    private _formBuilder: FormBuilder,
    private _coursesService: CoursesService,
    private _careerService: CareerService,
    private spinner: NgxSpinnerService
  ){
    this.registerForm = this.createFormValue()
  }
  ngOnInit(): void {
    this.getAllCursos()
  }

  createFormValue(){
    return this._formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(225)]],
      image: ['', [Validators.required, Validators.maxLength(500)]],
      description: ['', [Validators.required, Validators.maxLength(150)]],
    })  
  }

  onSubmit(){
    const filtrado = this.listCourses.filter( data => 
      data.estado
    ).map( data => 
      ({ id: data.id })
    )
    const request: CarrerWithCourses = {
      ...this.registerForm.value,
      courses: filtrado
    }
    
    this._careerService.postCreateCarrer(request).subscribe((response) => {
      console.log("Respondio esto",response);
      if(response.status){
        this.registerForm.reset();
        this.listCourses = this.listCourses.map(
          item => ({ ...item, estado: false})
        );
      }
    })
  }

  get checkedCourses(){
    return this.listCourses.filter( item => item.estado).length
  }

  getAllCursos(){
    this.spinner.show();
    this._coursesService.getAllCourses().subscribe((response) => {
      this.listCourses = response.data.map(
        item => ({ ...item, estado: false})
      );
      this.spinner.hide();
    })
  }

}
