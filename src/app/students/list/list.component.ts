import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: any;
  name: string = ''
  lname: string = ''
  date1 = new Date().toISOString().slice(0,10)
  date2 = new Date().toISOString().slice(0,10);



  constructor(private studentservice:StudentService, private router:Router) { }

  ngOnInit(): void {

    this.studentservice.getStudents().subscribe({
      next: (data) => {
        this.students = data;}})
  }

  edit(student:Student):void{
    localStorage.setItem("id",student.id);
    this.router.navigate(["./students/edit"]);
  }

  details(student:Student):void{
    localStorage.setItem("id",student.id);
    this.router.navigate(["./students/details"]);
  }

  delete(student:Student){
    this.studentservice.deleteStudent(student)
    .subscribe(data=>{
      this.students=this.students.filter((s: Student)=>s!==student);
      alert("The student has been successfully deleted...!!!");
      this.router.navigate(["./students/list"]);
    },
    error => {
      alert("The student is already inactive...!!!")
    },
    )
  }
  searchByName(){
    this.studentservice.getStudentByname(this.name.trim()).subscribe({
      next: (data) => {
        this.students = data;}}
    )
  }
  searchByLastName(){
    this.studentservice.getStudentBylastname(this.lname.trim()).subscribe({
      next: (data) => {
        this.students = data;}}
    )
  }
  searchByRange(){
    this.studentservice.getStudentByrange(this.date1,this.date2).subscribe({
      next: (data) => {
        this.students = data;}}
    )
  }

}
