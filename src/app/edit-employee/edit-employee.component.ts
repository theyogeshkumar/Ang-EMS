import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private loggerService: LoggerService,
    private formBuilder: FormBuilder
  ) { }

  employeeData: Employee;
  departments: Department[];
  searchEmpData=this.formBuilder.group( {
    employeeId: ['',Validators.required ]
  } );
  updateEmpData=this.formBuilder.group( {
    employeeId: [''],
    firstName:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z A-Z]*$")]],
    lastName:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z A-Z]*$")]],
    dateOfBirth:['',Validators.required],
    contactNo:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    department:['', Validators.required]
  } );
  
  ngOnInit() {
    this.employeeService.getAllDepartments().subscribe(data=>{
      this.departments=data;
    })
  }

  searchEmployee(employeeId: number){
    this.employeeService.getEmployee(employeeId).subscribe(data=>{
      this.employeeData=data;
      if(this.employeeData!=null){
      console.log("Employee Details By Id: "+ this.employeeData.employeeId+" "+this.employeeData.firstName+" "+
            this.employeeData.lastName+" "+this.employeeData.dateOfBirth+" "+this.employeeData.contactNo+" "+
            this.employeeData.department.departmentId+" "+this.employeeData.department.deprtmentName);
            
            this.updateEmpData.setValue(this.employeeData);
      }
      else{
        console.log("No Records Found!!!!");
      }
    })
  }

  updateEmployee(id: number, employee: Employee) {
    if(window.confirm('Are you sure, you want to update?')){
      this.employeeService.updateEmployee(id, employee).subscribe(data => {
        this.employeeData=data;
        alert("Employee details updated successfully!!!!");
        this.loggerService.loggingCrudMessage("Updating Employee Details");
        console.log("Updated Employee Details: "+this.employeeData.employeeId+" "+this.employeeData.firstName+" "+
            this.employeeData.lastName+" "+this.employeeData.dateOfBirth+" "+this.employeeData.contactNo+" "+
            this.employeeData.department.departmentId+" "+this.employeeData.department.deprtmentName);
        
        window.location.reload();
        //this.router.navigate(['/employee-list']);
      })
    }
  }

}
