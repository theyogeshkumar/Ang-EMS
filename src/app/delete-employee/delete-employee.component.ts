import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private loggerService: LoggerService, private router: Router, private formBuilder: FormBuilder) { }
  employeeData: Employee;

  searchEmpData=this.formBuilder.group( {
    employeeId: ['',Validators.required ]
  } );

  ngOnInit(): void {
  }
  searchEmployee(employeeId: number){
    this.employeeService.getEmployee(employeeId).subscribe(data=>{
      this.employeeData=data;
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

  deleteEmployee(empId: number){
      this.employeeService.deleteEmployee(empId).subscribe((data: {}) => {
        alert("Employee Record deleted successfully");
        this.loggerService.loggingCrudMessage("Deleting Employee Record");
        this.router.navigate(['/employee-list']);
        window.location.reload();
      })
    
  }

}
