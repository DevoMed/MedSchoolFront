import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { Subject } from 'src/app/interfaces/Subject.interface';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  student: any
  subject: any
  selectsubj: any


  constructor(private studentservice: StudentService, private subjectservice: SubjectService,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.details();
    this.subjectservice.getSubjects()
      .subscribe(data => {
        this.subject = data
      })
  }

  details() {
    let id = localStorage.getItem("id");
    this.studentservice.getStudentId(id)
      .subscribe(data => {
        this.student = data
      })
  }

  add(student: Student) {
    let id2 = this.student.id
    let id1 = this.selectsubj.id
    this.studentservice.StudentToSubject(id1, id2, student).subscribe(data => {
      this.snackBar.open("The subject has been successfully added", "", {
        panelClass: 'my-custom-snackbar',
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      window.location.reload();
    },
      error => {
        this.snackBar.open("You are already enrolled in this subject...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      },
    )
  }

  back() {
    this.router.navigate(["./students/list"])
  }

}
