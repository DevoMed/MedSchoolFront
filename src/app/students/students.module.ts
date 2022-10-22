import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { SubjectService } from '../services/subject.service';






@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    HomeComponent,
    DetailsStudentComponent,
   

  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    
    
  ],
  exports: [
    
  ],
  providers: [StudentService,
  SubjectService],
})
export class StudentsModule { }
