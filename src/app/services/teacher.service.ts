import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces/Teacher.interface';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  private baseUrl: string = environment.baseUrl;


  getTeachers():Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}teachers/get`)
  }

  getTeacherId(id: string | null): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}teachers/${id}`)
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}teachers/add`, teacher);
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}teachers/update/${teacher.id}`, teacher);
  }

  deleteTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.delete<Teacher>(`${this.baseUrl}teachers/inactive/${teacher.id}`);
  }

  TeacherToSubject(id1:string, id2:string, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}teachers/${id1}/teacher/${id2}`,teacher);
  }

  CordinatorToSubject(id1:string, id2:string, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}teachers/${id1}/cordinator/${id2}`,teacher);
  }
  
  getTeacherByname(name: string | null): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}teachers/search/name?name=${name}`)
  }

  getTeacherBylastname(lname: string | null): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}teachers/search/lname?lname=${lname}`)
  }

  getTeacherByrange(date1:String, date2:String): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}teachers/search/range?d1=${date1}&d2=${date2}`)
  }
}
