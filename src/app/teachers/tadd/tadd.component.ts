import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tadd',
  templateUrl: './tadd.component.html',
  styleUrls: ['./tadd.component.css']
})
export class TaddComponent implements OnInit {


  constructor(private router: Router, private teacherservice: TeacherService, private snackBar: MatSnackBar) { }

  teacher: Teacher = {
    id: '',
    firstName: '',
    lastName: '',
    dni: '',
    birthdayDate: new Date(),
    departHead: false,
    subjects: [],
    cordinator: []
  }

  loginForm: any;


  ngOnInit(): void {
  }

  add(teacher: any) {
    this.teacherservice.addTeacher(teacher).subscribe(
      data => {
        this.snackBar.open("The teacher has been successfully added...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./teachers/tlist"]);
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
