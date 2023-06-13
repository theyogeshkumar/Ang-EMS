import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

console.warn("<<EMPLOYEE-LIST IS BEING LOADED LAZILY>>");
@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeListModule { }
