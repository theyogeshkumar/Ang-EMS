import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginCompRoutingModule } from './begin-comp-routing.module';
import { BeginCompComponent } from './begin-comp.component';

console.warn("<<LANDING PAGE IS BEING LOADED>>");
@NgModule({
  declarations: [
    BeginCompComponent
  ],
  imports: [
    CommonModule,
    BeginCompRoutingModule
  ]
})
export class BeginCompModule { }
