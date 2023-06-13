import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private router: Router, private loggerService: LoggerService, private formBuilder: FormBuilder) {}
  departments: Department[];
  employees: Employee[];
  newEmployee: Employee;

  addEmployee=this.formBuilder.group( {
    firstName:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z A-Z]*$")]],
    lastName:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z A-Z]*$")]],
    dateOfBirth:['',Validators.required],
    contactNo:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    department:['', Validators.required]
  } );
  
  ngOnInit(): void {
    this.employeeService.getAllDepartments().subscribe(data=>{
      this.departments=data;
    });

    this.employeeService.getAllEmployees().subscribe(data=>{
      this.employees=data;
    })
  }
  insertEmployee(employee: Employee) {
    this.employeeService.createEmployee( employee ).subscribe( data => {
      this.newEmployee=data;
      alert("Employee Added Successfully");
      this.loggerService.loggingCrudMessage("Adding New Employee");

      console.log("Employyes List before adding new employee: ");
      for(let emp of this.employees){
        console.log(emp);
      }

      console.log("Newly Added Employee: "+ this.newEmployee.employeeId+" "+this.newEmployee.firstName+" "+
                this.newEmployee.lastName+" "+this.newEmployee.dateOfBirth+" "+this.newEmployee.contactNo+" "+
                this.newEmployee.department.departmentId+" "+this.newEmployee.department.deprtmentName);
      
      console.log("Employyes List after adding new employee: ");
      this.employees.push(this.newEmployee);
      for(let emp of this.employees){
        console.log(emp);
      }
      this.router.navigate(['/employee-list']);
    } );
  }

}

