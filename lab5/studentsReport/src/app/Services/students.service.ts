import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private readonly myClient:HttpClient) { }
  private readonly base_URL = "http://localhost:3000/students";
  GetAllStudents() {
    return this.myClient.get(this.base_URL);
  }
  GetStudentById(id: any) {
    return this.myClient.get(this.base_URL + "/" + id);
  }
  AddStudent(newStudent:any) {
    return this.myClient.post(this.base_URL, newStudent);
  }
  updateStudent(id: any,updatedData:any) {
    return this.myClient.put(this.base_URL + "/" + id, updatedData);
  }
  deleteStudent(id: any) {
    return this.myClient.delete(this.base_URL + "/" + id);
  }
}
