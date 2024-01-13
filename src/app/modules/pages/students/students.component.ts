import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonComponentsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit{

  registerForm: FormGroup;
  imgSrc: string = '';

  constructor(
    private _formBuilder: FormBuilder,
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
      motherLtName: ['', [Validators.required, Validators.maxLength(50)]],
      fatherLtName: ['', [Validators.required, Validators.maxLength(50)]],
      nickname: [ '', [Validators.required, Validators.maxLength(50)]],
      edad: ['', [Validators.required, Validators.maxLength(3)]],
      codigo: [ '', [Validators.required, Validators.minLength(10)]],
      birthdate: ['', [Validators.required]],
      photo: ['https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg', [Validators.required]],
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
    console.log(this.registerForm.value);
  }

}
