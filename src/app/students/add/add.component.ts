import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private studentservice: StudentService, private snackBar: MatSnackBar) { }

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
        this.snackBar.open("The student has been successfully added", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./students/list"]);
      },
      error => {
        this.snackBar.open("This DNI is already exists...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      },
    )
  }

}
