import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTeacherComponent } from './details-teacher/details-teacher.component';
import { TaddComponent } from './tadd/tadd.component';
import { TeditComponent } from './tedit/tedit.component';
import { TlistComponent } from './tlist/tlist.component';

const routes: Routes = [
  {
    path: 'tlist',
    component: TlistComponent
  },
  {
    path:'tadd',
    component: TaddComponent
  },
  {
    path:'tedit',
    component: TeditComponent
  },
  {
    path:'tdetails',
    component: DetailsTeacherComponent
  },
  {
    path: '**',
    redirectTo: 'tlist'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
