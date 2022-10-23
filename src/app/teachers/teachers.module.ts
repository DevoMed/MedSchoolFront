import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TlistComponent } from './tlist/tlist.component';
import { TaddComponent } from './tadd/tadd.component';
import { TeditComponent } from './tedit/tedit.component';
import { DetailsTeacherComponent } from './details-teacher/details-teacher.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TeacherService } from '../services/teacher.service';
import { SubjectService } from '../services/subject.service';




@NgModule({
  declarations: [
    TlistComponent,
    TaddComponent,
    TeditComponent,
    DetailsTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports:[
    
  ],

  providers: [TeacherService,
    SubjectService],
})
export class TeachersModule { }
