import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    AllStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
