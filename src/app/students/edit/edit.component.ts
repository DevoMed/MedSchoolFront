import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student:Student={
    id:'',
    firstName: '',
    lastName: '',
    dni: '',
    birthdayDate:new Date(),
    avgGrade: 0.0,
}

  constructor(private studentservice:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id=localStorage.getItem("id");
    this.studentservice.getStudentId(id)
    .subscribe(data=>{
      this.student=data;
    })

  }
  update(student:Student){
    this.studentservice.updateStudent(student)
    .subscribe(data=>{
      this.student=data;
      alert("The student has been successfully updated...!!!");
      this.router.navigate(["./students/list"]);
    })
  }

}
