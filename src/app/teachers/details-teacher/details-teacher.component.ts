import { Component, OnInit } from '@angular/core';
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
  selectsubj:any
  subjtocor:any
  

  constructor( private teacherservice:TeacherService, private subjectservice:SubjectService, 
    private router:Router) { }

  ngOnInit(): void {
    this.details();
    this.subjectservice.getSubjects()
    .subscribe( data => {
    this.subject = data})
   
  }

  details(){
    let id=localStorage.getItem("id");
    this.teacherservice.getTeacherId(id)
    .subscribe(data=>{
    this.teacher=data
    })
  }

  add(teacher : Teacher){
   let id2=this.teacher.id
   let id1=this.selectsubj.id
   this.teacherservice.TeacherToSubject(id1,id2,teacher).subscribe(data=>{
      alert("The subject has been successfully added")
      window.location.reload();
  },
  error => {
    alert("You are already teach this subject...!!!")
  },
  )
}

addCor(teacher : Teacher){
  let id1=this.subjtocor.id
  let id2=this.teacher.id
  this.teacherservice.CordinatorToSubject(id1,id2,teacher).subscribe(data=>{
     alert("The subject has been successfully added")
     window.location.reload();
 },
 error => {
   alert("This subject has already a coordinator...!!!")
 },
 )
}

back(){
  this.router.navigate(["./teachers/tlist"])
}

}
