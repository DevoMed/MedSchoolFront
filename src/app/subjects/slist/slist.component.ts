import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'src/app/interfaces/Subject.interface';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.component.html',
  styleUrls: ['./slist.component.css']
})
export class SlistComponent implements OnInit {

  filterTerm!: string;
  subjects: any




  constructor(private subjectservice: SubjectService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.subjectservice.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
      }
    })
  }


  edit(subject: Subject): void {
    localStorage.setItem("id", subject.id);
    this.router.navigate(["./subjects/sedit"]);
  }

  details(subject: Subject): void {
    localStorage.setItem("id", subject.id);
    this.router.navigate(["./subjects/details"]);
  }

  delete(subject: Subject) {
    this.subjectservice.deleteSubject(subject)
      .subscribe(data => {
        this.subjects = this.subjects.filter((s: Subject) => s !== subject);
        this.snackBar.open("The subject has been successfully disabled...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./subjects/slist"]);
      },
        error => {
          this.snackBar.open("The subject is already inactive...!!!", "", {
            panelClass: 'my-custom-snackbar',
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        },
      )
  }
}
