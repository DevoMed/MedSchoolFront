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

  filterTerm!: string;
  students: Student[]=[];



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
      this.students=this.students.filter(s=>s!==student);
      alert("The student has been successfully deleted...!!!");
      this.router.navigate(["./students/list"]);
    })
  }

}
