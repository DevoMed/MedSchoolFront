import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-details-teacher',
  templateUrl: './details-teacher.component.html',
  styleUrls: ['./details-teacher.component.css']
})
export class DetailsTeacherComponent implements OnInit {

  teacher: any
  subject: any
  selectsubj: any
  subjtocor: any


  constructor(private teacherservice: TeacherService, private subjectservice: SubjectService,
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
    this.teacherservice.getTeacherId(id)
      .subscribe(data => {
        this.teacher = data
      })
  }

  add(teacher: Teacher) {
    let id2 = this.teacher.id
    let id1 = this.selectsubj.id
    this.teacherservice.TeacherToSubject(id1, id2, teacher).subscribe(data => {
      this.snackBar.open("The subject has been successfully added", "", {
        panelClass: 'my-custom-snackbar',
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      window.location.reload();
    },
      error => {
        this.snackBar.open("You are already teach this subject...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      },
    )
  }

  addCor(teacher: Teacher) {
    let id1 = this.subjtocor.id
    let id2 = this.teacher.id
    this.teacherservice.CordinatorToSubject(id1, id2, teacher).subscribe(data => {
      this.snackBar.open("The subject has been successfully added", "", {
        panelClass: 'my-custom-snackbar',
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      window.location.reload();
    },
      error => {
        this.snackBar.open("This subject has already a coordinator...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      },
    )
  }

  back() {
    this.router.navigate(["./teachers/tlist"])
  }

}
