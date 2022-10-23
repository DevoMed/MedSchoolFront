import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tadd',
  templateUrl: './tadd.component.html',
  styleUrls: ['./tadd.component.css']
})
export class TaddComponent implements OnInit {

 
  constructor(private router: Router, private teacherservice: TeacherService) { }

  teacher: Teacher = {
    id: '',
    firstName: '',
    lastName: '',
    dni: '',
    birthdayDate: new Date(),
    departHead:false,
    subjects: [],
    cordinator:[]
  }
  
  loginForm: any;


  ngOnInit(): void {
  }

  add(teacher: any) {
    this.teacherservice.addTeacher(teacher).subscribe(
      data => {
        alert("The teacher has been successfully added")
        this.router.navigate(["./teachers/tlist"]);
      },
      error => {
        alert("This DNI is already exists...!!!")
      },
    )
  }
}
