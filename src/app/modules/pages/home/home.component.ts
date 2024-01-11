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
        students: [
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Jairo",
            secondName: "Anthony",
            motherLastName: "Caccya",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
        ]
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: [
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Jairo",
            secondName: "Anthony",
            motherLastName: "Caccya",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
        ]
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: [
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Jairo",
            secondName: "Anthony",
            motherLastName: "Caccya",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
        ]
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: [
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Jairo",
            secondName: "Anthony",
            motherLastName: "Caccya",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
        ]
      },
      {
        logo: "https://blog.ayzweb.com/wp-content/uploads/homer.gif",
        career: "Medicina",
        courses: [
          "Matematica",
          "Fisica",
          "sexologia"
        ],
        students: [
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Jairo",
            secondName: "Anthony",
            motherLastName: "Caccya",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Gonzalo",
            secondName: "Erick",
            motherLastName: "Davila",
            fatherLastName: "Ñahui",
            edad: 21,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
          {
            name: "Renzo",
            secondName: "Fernando",
            motherLastName: "Velarde",
            fatherLastName: "Ñahui",
            edad: 20,
            codigo: "2013232231223",
            birthdate: new Date,
            photo: "",
            sex: "F",
          },
        ]
      },
    ]
  }

}
