import { Component, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  @ViewChild('name') name: any;
  @ViewChild('age') age: any;
  @ViewChild('email') email: any;
  @ViewChild('phone') phone: any;
  @ViewChild('address') address: any;
  constructor(private myService: StudentsService) {}
  createdSuccessfully() {
    alert('Student created successfully');
  }
  Add(name: any, age: any, email: any, address: any, phone: any) {
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
      this.myService.AddStudent(newStudent).subscribe();
      this.createdSuccessfully();
    }
  }
  reset() {
    this.name.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.address.nativeElement.value = '';
    this.phone.nativeElement.value = '';
    this.age.nativeElement.value = '';
  }
}
