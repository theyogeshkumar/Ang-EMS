import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchEmployeeRoutingModule } from './search-employee-routing.module';
import { SearchEmployeeComponent } from './search-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

console.warn("<<SEARCH-EMPLOYEE IS BEING LOADED LAZILY>>");
@NgModule({
  declarations: [
    SearchEmployeeComponent
  ],
  imports: [
    CommonModule,
    SearchEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SearchEmployeeModule { }
