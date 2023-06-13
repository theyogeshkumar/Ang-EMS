import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmployeeRoutingModule } from './edit-employee-routing.module';
import { EditEmployeeComponent } from './edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

console.warn("<<EDIT_EMPLOYEE IS BEING LOADED LAZILY>>");
@NgModule({
  declarations: [
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EditEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditEmployeeModule { }
