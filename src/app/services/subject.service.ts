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
  getSubjectId(id: string | null):Observable<Subject>{
    return this.http.get<Subject>(`${this.baseUrl}subjects/${id}`)
  }
  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${this.baseUrl}subjects/add`, subject);
  }
  updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`${this.baseUrl}subjects/update/${subject.id}`, subject);
  }
  deleteSubject(subject: Subject): Observable<Subject> {
    return this.http.delete<Subject>(`${this.baseUrl}subjects/inactive/${subject.id}`);
  }
}
