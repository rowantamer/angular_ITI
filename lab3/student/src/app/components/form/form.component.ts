import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  age: string = "";
  errorMessage: string = '';
  @Output() studentAdded = new EventEmitter<{ name: string; age: string }>();
  addStudent() {
    if (this.name.length < 3) {
      this.errorMessage = 'Name must be at least 3 characters long';
      return;
    }

    if (+this.age < 20 || +this.age > 40) {
      this.errorMessage = 'Age must be between 20 and 40';
      return;
    }

    this.studentAdded.emit({ name: this.name, age: this.age });
    this.name = '';
    this.age ="";
    this.errorMessage = '';
  }
}
