import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralResponseData } from '../models/common/common-response';
import { Observable } from 'rxjs';
import { CardCareer } from '../models/response/carrer-card-response.interface';
import { CarrerWithCourses } from '../models/request/carrer-request.interface';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  urlWebApi = environment.urlApiEvironment + '/career'

  constructor(
    private _http: HttpClient
  ) { }

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  };

  getAllCareer(): Observable<GeneralResponseData<CardCareer[]>>{
    return this._http.get<GeneralResponseData<CardCareer[]>>(`${this.urlWebApi}/getCardCareer`, { headers: this.headers });
  }

  postCreateCarrer(request: CarrerWithCourses): Observable<GeneralResponseData<''>>{
    return this._http.post<GeneralResponseData<''>>(`${this.urlWebApi}/postCreateCareer`, request, { headers: this.headers });
  }

}
