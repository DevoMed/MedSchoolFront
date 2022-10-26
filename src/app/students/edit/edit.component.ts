import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student: any


  constructor(private studentservice: StudentService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.studentservice.getStudentId(id)
      .subscribe(data => {
        this.student = data;
      })

  }
  update(student: Student) {
    this.studentservice.updateStudent(student)
      .subscribe(data => {
        this.student = data;
        this.snackBar.open("The student has been successfully updated", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./students/list"]);
      })
  }

}
