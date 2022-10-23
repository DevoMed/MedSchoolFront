import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {

  filterTerm!: string;
  teachers: any;



  constructor(private teacherservice:TeacherService, private router:Router) { }

  ngOnInit(): void {

    this.teacherservice.getTeachers().subscribe({
      next: (data) => {
        this.teachers = data;}})
  }

  edit(teacher:Teacher):void{
    localStorage.setItem("id",teacher.id);
    this.router.navigate(["./teachers/tedit"]);
  }

  details(teacher:Teacher):void{
    localStorage.setItem("id",teacher.id);
    this.router.navigate(["./teachers/tdetails"]);
  }

  delete(teacher:Teacher){
    this.teacherservice.deleteTeacher(teacher)
    .subscribe(data=>{
      this.teachers=this.teachers.filter((s: Teacher)=>s!==teacher);
      alert("The Teacher has been successfully deleted...!!!");
      this.router.navigate(["./teachers/tlist"]);
    },
    error => {
      alert("The Teacher is already inactive...!!!")
    },
    )
  }

}
