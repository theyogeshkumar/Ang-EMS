import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDepartmentRoutingModule } from './add-department-routing.module';
import { AddDepartmentComponent } from './add-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

console.warn("<<ADD-DEPARTMENT IS BEING LOADED LAZILY>>");
@NgModule({
  declarations: [
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    AddDepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddDepartmentModule { }
