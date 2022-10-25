import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {

  teacher:any


  constructor(private teacherservice:TeacherService, private router:Router) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id=localStorage.getItem("id");
    this.teacherservice.getTeacherId(id)
    .subscribe(data=>{
      this.teacher=data;
    })

  }
  update(teacher:Teacher){
    this.teacherservice.updateTeacher(teacher)
    .subscribe(data=>{
      this.teacher=data;
      alert("The teacher has been successfully updated...!!!");
      this.router.navigate(["./teachers/tlist"]);
    },err=>{
      console.log(err)
    })
  }

}
