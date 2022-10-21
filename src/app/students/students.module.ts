import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ],
  exports: [
    
  ],
  providers: [StudentService],
})
export class StudentsModule { }
