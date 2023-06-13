import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteEmployeeRoutingModule } from './delete-employee-routing.module';
import { DeleteEmployeeComponent } from './delete-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

console.warn("<<DELETE_EMPLOYEE IS BEING LOADED LAZILY>>");
@NgModule({
  declarations: [
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    DeleteEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeleteEmployeeModule { }
