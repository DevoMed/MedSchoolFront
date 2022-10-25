import { Component, OnInit } from '@angular/core';
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
  



  constructor(private subjectservice:SubjectService, private router:Router) { }

  ngOnInit(): void {

    this.subjectservice.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;}})
  }
 

  edit(subject:Subject):void{
    localStorage.setItem("id",subject.id);
    this.router.navigate(["./subjects/sedit"]);
  }

  details(subject:Subject):void{
    localStorage.setItem("id",subject.id);
    this.router.navigate(["./subjects/details"]);
  }

  delete(subject:Subject){
    this.subjectservice.deleteSubject(subject)
    .subscribe(data=>{
      this.subjects=this.subjects.filter((s: Subject)=>s!==subject);
      alert("The subject has been successfully deleted...!!!");
      this.router.navigate(["./subjects/slist"]);
    },
    error => {
      alert("The subject is already inactive...!!!")
    },
    )
  }
}
