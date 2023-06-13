import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

console.warn("add empoyee module is loaded lazily ");

console.warn("<<ADD-EMPLOYEE IS BEING LOADED>>");
@NgModule({
  declarations: [
    AddEmployeeComponent
  ],

  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]

})

export class AddEmployeeModule { }