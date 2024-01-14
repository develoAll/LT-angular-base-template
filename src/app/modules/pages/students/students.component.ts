import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { StudentsService } from '../../../shared/services/students.service';
import { NotImageDirective } from '../../../shared/directives/not-image.directive';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonComponentsModule, NotImageDirective],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit{

  registerForm: FormGroup;
  imgSrc: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _studentsService: StudentsService
  ){
    this.registerForm = this.createFormValue()
  }

  ngOnInit(): void {
    this.createListenerForms()
  }

  createFormValue(){
    return this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      secondName: ['', [Validators.required, Validators.maxLength(50)]],
      motherLastName: ['', [Validators.required, Validators.maxLength(50)]],
      fatherLastName: ['', [Validators.required, Validators.maxLength(50)]],
      nickname: [ '', [Validators.required, Validators.maxLength(50)]],
      edad: ['', [Validators.required, Validators.maxLength(3)]],
      codigo: [ '', [Validators.required, Validators.minLength(10)]],
      birthdate: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
    })  
  }

  createListenerForms(){
    this.registerForm.valueChanges.subscribe((form) => {
      this.imgSrc = form.photo
    })
  }
  

  onSubmit(){
    this._studentsService.createStudent(this.registerForm.value).subscribe((response) => {
      console.log("Respondio esto");
      console.log(response);
    })
  }

}
