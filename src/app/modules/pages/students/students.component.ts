import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';
import { StudentsService } from '../../../shared/services/students.service';
import { NotImageDirective } from '../../../shared/directives/not-image.directive';
import { MatDialog } from '@angular/material/dialog';
import { ResponseApiComponent } from '../popups/response-api/response-api.component';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private _studentsService: StudentsService,
    private _dialog: MatDialog,
    private spinner: NgxSpinnerService,
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
      edad: ['', [Validators.required, Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]],
      codigo: [ '', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
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
    this.spinner.show();
    this._studentsService.createStudent(this.registerForm.value).subscribe((response) => {
      if (response.status) {
        this.spinner.hide();
        this._dialog.open(ResponseApiComponent,{
          disableClose: true,
        }).afterClosed().subscribe(result => {
          this.registerForm.reset();
        })
      }else{
        this.spinner.hide();
        alert("Hubo un error inesperado, espere la chocolatada")
      }
    })
  }

}
