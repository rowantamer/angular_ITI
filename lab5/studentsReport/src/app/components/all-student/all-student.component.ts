import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';


@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent {
  Students:any;
  constructor( public myService: StudentsService) {
    myService.GetAllStudents().subscribe({
      next: (data) => { this.Students = data; },
      error: (error) => { console.log(error); }
    });
  }
  deleteStudent(id: any){
    this.myService.deleteStudent(id).subscribe({
      next: (data) => { this.Students = data; },
      error: (error) => { console.log(error); }
    }
    )

  }
}
