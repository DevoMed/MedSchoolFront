import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {

  teachers: any;
  name: string = ''
  lname: string = ''
  date1 = new Date().toISOString().slice(0,10)
  date2 = new Date().toISOString().slice(0,10);



  constructor(private teacherservice:TeacherService, private router:Router, private snackBar: MatSnackBar) { }

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
      this.snackBar.open("The teacher has been successfully disabled...!!!", "", {
        panelClass: 'my-custom-snackbar',
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(["./teachers/tlist"]);
    },
    error => {
      this.snackBar.open("The Teacher is already inactive...!!!", "", {
        panelClass: 'my-custom-snackbar',
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    },
    )
  }
  searchByName(){
    this.teacherservice.getTeacherByname(this.name.trim()).subscribe({
      next: (data) => {
        this.teachers = data;}}
    )
  }
  searchByLastName(){
    this.teacherservice.getTeacherBylastname(this.lname.trim()).subscribe({
      next: (data) => {
        this.teachers = data;}}
    )
  }
  searchByRange(){
    this.teacherservice.getTeacherByrange(this.date1,this.date2).subscribe({
      next: (data) => {
        this.teachers = data;}}
    )
  }

}
