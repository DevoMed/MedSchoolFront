import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {

  teacher: any


  constructor(private teacherservice: TeacherService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.teacherservice.getTeacherId(id)
      .subscribe(data => {
        this.teacher = data;
      })

  }
  update(teacher: Teacher) {
    this.teacherservice.updateTeacher(teacher)
      .subscribe(data => {
        this.teacher = data;
        this.snackBar.open("The teacher has been successfully updated...!!!", "", {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["./teachers/tlist"]);
      }, err => {
        console.log(err)
      })
  }

}
