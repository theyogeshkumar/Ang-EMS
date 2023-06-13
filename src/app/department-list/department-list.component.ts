import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentsList:Department[];

  constructor(private employeeService: EmployeeService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.fetchAllDepartments();
  }

  fetchAllDepartments(){
    this.employeeService.getAllDepartments().subscribe(departmentsData=>{
      this.departmentsList=departmentsData;
      this.loggerService.loggingCrudMessage("Fetching Departments Details");
      if(this.departmentsList.length!=0){
        console.log(this.departmentsList);
      }
      else{
        console.log("No Records Found");
      }
    } );
  }


}
