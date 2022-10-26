import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  date1 = new Date().toISOString().slice(0, 10)
  date2 = new Date().toISOString().slice(0, 10);



  constructor(private studentservice: StudentService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.studentservice.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      }
    })
  }

  edit(student: Student): void {
    localStorage.setItem("id", student.id);
    this.router.navigate(["./students/edit"]);
  }

  details(student: Student): void {
    localStorage.setItem("id", student.id);
    this.router.navigate(["./students/details"]);
  }

  delete(student: Student) {
    this.studentservice.deleteStudent(student)
      .subscribe(data => {
        this.students = this.students.filter((s: Student) => s !== student);
        this.snackBar.open("The student has been successfully disabled", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./students/list"]);
      },
        error => {
          this.snackBar.open("The student is already inactive...!!!", "", {
            panelClass: 'my-custom-snackbar',
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        },
      )
  }
  searchByName() {
    this.studentservice.getStudentByname(this.name.trim()).subscribe({
      next: (data) => {
        this.students = data;
      }
    }
    )
  }
  searchByLastName() {
    this.studentservice.getStudentBylastname(this.lname.trim()).subscribe({
      next: (data) => {
        this.students = data;
      }
    }
    )
  }
  searchByRange() {
    this.studentservice.getStudentByrange(this.date1, this.date2).subscribe({
      next: (data) => {
        this.students = data;
      }
    }
    )
  }

}
