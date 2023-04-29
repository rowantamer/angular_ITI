import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { BannerComponent } from './components/banner/banner.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  {path: 'allStudents', component:AllStudentComponent},
  { path: 'addStudents', component: AddStudentComponent },
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  {path : 'studentDetails/:id', component:StudentDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
