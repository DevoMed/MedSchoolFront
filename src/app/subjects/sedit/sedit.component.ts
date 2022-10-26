import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Departments, Subject } from 'src/app/interfaces/Subject.interface';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-sedit',
  templateUrl: './sedit.component.html',
  styleUrls: ['./sedit.component.css']
})
export class SeditComponent implements OnInit {

  subject: any
  Departments = [

    { id: Departments.SOCIAL_STUDIES },
    { id: Departments.MATH },
    { id: Departments.LANGUAGE },
    { id: Departments.PHYSICAL_EDUCATION },
    { id: Departments.ART },
    { id: Departments.TECHNOLOGY },
    { id: Departments.CULTURE },
    { id: Departments.SCIENCES }
  ]


  constructor(private subjectservice: SubjectService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.edit();
  }

  edit() {
    let id = localStorage.getItem("id");
    this.subjectservice.getSubjectId(id)
      .subscribe(data => {
        this.subject = data;
      })

  }
  update(subject: Subject) {
    this.subjectservice.updateSubject(subject)
      .subscribe(data => {
        this.subject = data;
        this.snackBar.open("The subject has been successfully updated...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./subjects/slist"]);
      })
  }

}
