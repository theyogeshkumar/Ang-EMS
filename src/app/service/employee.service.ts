import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  url: string= 'http://localhost:8080/ems';
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/employeeslist');
  }

  getAllDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.url + '/departmentslist');
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(this.url + '/employeebyid/' + id)
      
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(
        this.url + '/add-employee',
        employee
      );
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http
      .post<Department>(
        this.url + '/adddepartment',
        department
      )
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(
        this.url + '/edit-employee/' + id,
        employee
      );
  }

  deleteEmployee(id: number) {
    return this.http
      .delete<Employee>(this.url + '/delete-employee/' + id);
  }
}
