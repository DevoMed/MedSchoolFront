import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SlistComponent } from './slist/slist.component';
import { SaddComponent } from './sadd/sadd.component';
import { SeditComponent } from './sedit/sedit.component';
import { DetailsSubjectComponent } from './details-subject/details-subject.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SlistComponent,
    SaddComponent,
    SeditComponent,
    DetailsSubjectComponent,
    
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class SubjectsModule { }
