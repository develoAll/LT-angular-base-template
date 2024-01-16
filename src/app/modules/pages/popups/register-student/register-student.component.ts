import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonComponentsModule } from '../../../../shared/modules/common-components.module';
import { StudentsService } from '../../../../shared/services/students.service';
import { StudentResponse } from '../../../../shared/models/response/student-response.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareerService } from '../../../../shared/services/career.service';
import { SimpleCareer } from '../../../../shared/models/response/career-response-interface';
import { EnrollCareer } from '../../../../shared/models/request/carrer-request.interface';
import { ResponseApiComponent } from '../response-api/response-api.component';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [CommonComponentsModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss'
})
export class RegisterStudentComponent {

  registerForm: FormGroup;
  itemStudent: StudentResponse[] = [];
  itemCareer: SimpleCareer[] = [];

  constructor(
    private _matDialogRef: MatDialogRef<RegisterStudentComponent>,
    private _dialog: MatDialog,
    private _studentsService: StudentsService,
    private _careerService: CareerService,
    private _formBuilder: FormBuilder,
  ){
    this.registerForm = this.createFormValue();
    this.getAllStudent();
    this.getAllCareer()
  }

  createFormValue(){
    return this._formBuilder.group({
      idStudent: ['', [Validators.required]],
      idCareer: ['', [Validators.required]],
    })  
  }

  getAllStudent(){
    this._studentsService.getAllCourses().subscribe( (response) => {
      this.itemStudent = response.data.filter( (data) => data.idCareer == null)
    })
  }

  getAllCareer(){
    this._careerService.getAllIdNameCareer().subscribe( (response) => {
      this.itemCareer = response.data
    })
  }

  onSubmit(){
    const request: EnrollCareer = {
      ...this.registerForm.value,
    }
    this._studentsService.createEnrollCarer(request).subscribe( (response) => {
      if(response.status){
        this._dialog.open(ResponseApiComponent,{
          disableClose: true,
        }).afterClosed().subscribe(result => {
          this.close()
        })
      }
    })
    
  }

  close(){
    this._matDialogRef.close()
  }
}
