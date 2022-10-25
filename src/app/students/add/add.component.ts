import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private studentservice: StudentService) { }

  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    dni: '',
    birthdayDate: new Date(),
    avgGrade: 0.0,
    subject: []
  }
  
  loginForm: any;


  ngOnInit(): void {
  }

  add(student: Student) {
    this.studentservice.addStudent(student).subscribe(
      data => {
        alert("The student has been successfully added")
        this.router.navigate(["./students/list"]);
      },
      error => {
        alert("This DNI is already exists...!!!")
      },
    )
  }

}
