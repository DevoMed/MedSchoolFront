import { Component, OnInit } from '@angular/core';
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
  selectsubj:any
  

  constructor( private studentservice:StudentService, private subjectservice:SubjectService, private router:Router) { }

  ngOnInit(): void {
    this.details();
    this.subjectservice.getSubjects()
    .subscribe( data => {
    this.subject = data})
   
  }

  details(){
    let id=localStorage.getItem("id");
    this.studentservice.getStudentId(id)
    .subscribe(data=>{
    this.student=data
    })
  }

  add(student : Student){
   let id2=this.student.id
   let id1=this.selectsubj.id
   this.studentservice.StudentToSubject(id1,id2,student).subscribe(data=>{
      alert("The subject has been successfully added")
      window.location.reload();
  })
}

back(){
  this.router.navigate(["./students/list"])
}

}
