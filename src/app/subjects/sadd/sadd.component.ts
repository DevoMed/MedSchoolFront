import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Departments, Subject } from 'src/app/interfaces/Subject.interface';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-sadd',
  templateUrl: './sadd.component.html',
  styleUrls: ['./sadd.component.css']
})
export class SaddComponent implements OnInit {


  constructor(private subjectservice: SubjectService, private router: Router, private snackBar: MatSnackBar) { }

  subject: Subject = {
    id: '',
    subjectName: '',
    department: Departments.MATH,

  }

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

  loginForm: any;


  ngOnInit(): void {
  }

  add(subject: Subject) {
    this.subjectservice.addSubject(subject).subscribe(
      data => {
        this.snackBar.open("The subject has been successfully added", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./subjects/slist"]);
      }
    )
  }

}
