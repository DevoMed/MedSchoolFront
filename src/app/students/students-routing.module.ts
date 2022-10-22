import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AddComponent } from './add/add.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path:'add',
        component: AddComponent
      },
      {
        path:'edit',
        component: EditComponent
      },
      {
        path:'details',
        component: DetailsStudentComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
