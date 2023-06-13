import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {


  constructor(public employeeService: EmployeeService, private router: Router, private loggerService: LoggerService, private formBuilder: FormBuilder) {}
  departments: Department[];
  newDepartment: Department;
  addDepartment=this.formBuilder.group( {
    deprtmentName: ['', Validators.required]
  } );
  ngOnInit(): void {
    this.employeeService.getAllDepartments().subscribe(data=>{
      this.departments=data;
    });
  }
  insertDepartment(department: Department) {
    this.loggerService.loggingCrudMessage("Adding New Department");
    this.employeeService.createDepartment(department).subscribe(data=>{
      alert("Department added successfully");
      
      console.log("Departments List before adding new department: ");
      for(let dept of this.departments){
        console.log(dept);
      }
      this.newDepartment=data;
      this.departments.push(this.newDepartment);
      console.log("Newly Added Department: "+this.newDepartment.departmentId+" "+this.newDepartment.deprtmentName);
      console.log("Departments List before adding new department: ");
      for(let dept of this.departments){
        console.log(dept);
      }
      
      this.router.navigate(['/department-list'])
    });
  }

}
