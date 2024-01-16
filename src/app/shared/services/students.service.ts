import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Student } from '../models/request/course-letter-request';
import { Observable } from 'rxjs';
import { GeneralResponseData } from '../models/common/common-response';
import { StudentResponse } from '../models/response/student-response.interface';
import { EnrollCareer } from '../models/request/carrer-request.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  urlWebApi = environment.urlApiEvironment + '/student'

  constructor(
    private _http: HttpClient
  ) { }

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  };

  createStudent(request: Student): Observable<GeneralResponseData<''>>{
    return this._http.post<GeneralResponseData<''>>(`${this.urlWebApi}/postCreateStudent`, request, { headers: this.headers });
  }

  createEnrollCarer(request: EnrollCareer): Observable<GeneralResponseData<''>>{
    return this._http.post<GeneralResponseData<''>>(`${this.urlWebApi}/postCreateEnrollCareer`, request, { headers: this.headers });
  }

  getAllCourses(): Observable<GeneralResponseData<StudentResponse[]>>{
    return this._http.get<GeneralResponseData<StudentResponse[]>>(`${this.urlWebApi}/getAllStudent`, { headers: this.headers });
  }

}
