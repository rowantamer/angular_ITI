import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  ID: any;
  student: any;
  updateStudent: any;
  // to get student data from the form
  constructor(myRoute: ActivatedRoute, public myService: StudentsService) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentById(this.ID).subscribe(
      {
        next: (data) => { this.student = data; },
        error: (err) => { console.log(err); },
      }
    );
  }
  createdSuccessfully() {
    alert('Student Updated successfully');
  }
  Update(name: any, age: any, email: any, address: any,phone : any) {
    let newStudent = { name, age, email, address, phone };
    if (
      name == '' ||
      age == 0 ||
      email == '' ||
      address == '' ||
      phone == ''
    ) {
      alert('please enter all records');
    }else {
      this.myService.updateStudent(this.ID,newStudent).subscribe();
      this.createdSuccessfully();
    }
  }

}
