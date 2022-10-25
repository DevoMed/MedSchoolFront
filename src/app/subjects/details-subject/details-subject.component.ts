import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/interfaces/Subject.interface';
import { Student } from 'src/app/interfaces/interfaces';
import { SubjectService } from 'src/app/services/subject.service';
import { Teacher } from 'src/app/interfaces/Teacher.interface';

@Component({
  selector: 'app-details-subject',
  templateUrl: './details-subject.component.html',
  styleUrls: ['./details-subject.component.css']
})
export class DetailsSubjectComponent implements OnInit {

  subject: any

  constructor(private subjectservice:SubjectService, private router:Router) { }

  ngOnInit(): void {
    this.details();
    
   
  }

  details(){
    let id=localStorage.getItem("id");
    this.subjectservice.getSubjectId(id)
    .subscribe(data=>{
    this.subject=data
    })
  }

back(){
  this.router.navigate(["./subjects/slist"])
}

}
