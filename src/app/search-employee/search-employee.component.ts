import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private loggerService: LoggerService, private formBuilder: FormBuilder) { }
  employeeData: Employee;

  searchEmpData=this.formBuilder.group( {
    employeeId: ['',Validators.required ]
  } );

  ngOnInit(): void {
  }
  searchEmployee(employeeId: number){
    this.employeeService.getEmployee(employeeId).subscribe(data=>{
      this.employeeData=data;
      this.loggerService.loggingCrudMessage("Fetching Employee Details By Id:");
      if(this.employeeData!=null){
      console.log("Employee Details By Id: "+ this.employeeData.employeeId+" "+this.employeeData.firstName+" "+
            this.employeeData.lastName+" "+this.employeeData.dateOfBirth+" "+this.employeeData.contactNo+" "+
            this.employeeData.department.departmentId+" "+this.employeeData.department.deprtmentName);
      }
      else{
        console.log("No Records Found!!!!");
      }
    })
  }

}
