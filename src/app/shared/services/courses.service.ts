import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponseData } from '../models/common/common-response';
import { CourseResponse } from '../models/response/course-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  urlWebApi = environment.urlApiEvironment + '/course'

  constructor(
    private _http: HttpClient
  ) {}

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  };

  getAllCourses(): Observable<GeneralResponseData<CourseResponse[]>>{
    return this._http.get<GeneralResponseData<CourseResponse[]>>(`${this.urlWebApi}/getAllCourse`, { headers: this.headers });
  }
}
