import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginCompComponent } from './begin-comp.component';

const routes: Routes = [{ path: '', component: BeginCompComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginCompRoutingModule { }
