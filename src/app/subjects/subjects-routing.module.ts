import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSubjectComponent } from './details-subject/details-subject.component';
import { SaddComponent } from './sadd/sadd.component';
import { SeditComponent } from './sedit/sedit.component';
import { SlistComponent } from './slist/slist.component';

const routes: Routes = [
  {
    path: 'slist',
    component: SlistComponent
  },
  {
    path:'sadd',
    component: SaddComponent
  },
  {
    path:'sedit',
    component: SeditComponent
  },
  {
    path:'details',
    component: DetailsSubjectComponent
  },
  {
    path: '**',
    redirectTo: 'slist'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
