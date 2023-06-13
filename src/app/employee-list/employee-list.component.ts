import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employeesList: Employee[];
  checklist:any[]=[];
  checkedList:any;
  flag:number = 0;
  selAll:boolean=false;
  finalCheckList:number[]=[];
  btnName:string="SELECT ALL";
 

  constructor(private employeeService: EmployeeService, private loggerService: LoggerService, private router: Router) {

   }


      ngOnInit(): void {
    this.fetchAllEmployees();
    
  }


  fetchAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(employeesData=>{
      this.employeesList=employeesData;
      this.loggerService.loggingCrudMessage("Fetching all employees records.");
      if(this.employeesList.length!=0){
      console.log(this.employeesList);
      
        Object.values(this.employeesList).forEach(user=>{
          this.checklist.push({Id:user.employeeId,isSelect:false});
        })
       console.log(this.checklist);
     
    }
      else{
        console.log("No Employee Records Found");
      }
    } );
  }
  

inp:boolean=true;
  selectCheck(empId: number) {
    console.log(this.checklist);

    let elementIndex = this.checklist.findIndex((obj => obj.Id == empId ));
    console.log(elementIndex);
    
    if(this.checklist[elementIndex].isSelect === false){ 
      this.checklist[elementIndex].isSelect = true;
       console.log("After update: ", this.checklist);
    }else{
      this.checklist[elementIndex].isSelect = false;
       console.log("After update: ", this.checklist);
    }

 for(let i=0;i<this.checklist.length;i++){
     if(this.checklist[i].isSelect==true)
     {
      this.inp=false;
      break;
     }
     else{
      this.inp=true;
     }
   }

   

  }
  

  deleteEmp()
  {
    for(let i=0;i<this.checklist.length;i++){
      
      if(this.checklist[i].isSelect==true)
      {
        console.log("Boyy ",this.checklist[i].isSelect);
        console.log(this.checklist[i].Id);
       this.finalCheckList.push(this.checklist[i].Id);
      }
    }
    console.log(this.finalCheckList);
    //this.router.navigate(['/add-employee']);
    //this.router.navigate([''])
    if(window.confirm("Sure you want to delete!!")){
      for(let i=0;i<this.finalCheckList.length;i++){
      this.employeeService.deleteEmployee(this.finalCheckList[i]).subscribe((data: {}) =>{
        this.loggerService.loggingCrudMessage("Employee Deleted by Id"+this.finalCheckList[i]);
      })
      }
      window.location.reload();
    }
    else{
      window.location.reload();
    }
  }



  selectAll()
  {
    
    if(this.btnName=="SELECT ALL")
    {
      for(let i=0;i<this.checklist.length;i++){
        this.selectCheck(this.checklist[i].Id);
        this.selAll=true;
        this.btnName="DE-SELECT ALL";
    }
    }
    else{
      this.selAll=false;
        this.btnName="SELECT ALL";
        this.inp=true;
        for(let i=0;i<this.checklist.length;i++){
          this.checklist[i].isSelect = false;
        }
    }
    console.log("DONE : ", this.checklist);
    
  }
 
}



















