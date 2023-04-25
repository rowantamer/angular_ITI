import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
Students: { name: string, age: number }[] = [{
    name: 'Rowan',
    age: 23
  }];
}
