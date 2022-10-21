import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Student } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http:HttpClient) { }

 private baseUrl: string = environment.baseUrl;
 

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}students/get`)  
  }
  getStudentId(id: string | null): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}students/${id}`)
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}students/add`, student);
  }
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}students/update/${student.id}`, student);
  }
  deleteStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}students/inactive/${student.id}`);
  }


}
