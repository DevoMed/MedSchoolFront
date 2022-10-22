import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RootComponent } from './home/root/root.component';
import { ErrorComponent } from './shared/error/error.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: RootComponent
  },
  
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
