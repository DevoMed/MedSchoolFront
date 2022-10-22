import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../interfaces/Subject.interface';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getSubjects():Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}subjects/get`)  
  }
}
