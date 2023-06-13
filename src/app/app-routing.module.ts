import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [{ path: 'add-employee', loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeeModule) }, { path: 'edit-employee', loadChildren: () => import('./edit-employee/edit-employee.module').then(m => m.EditEmployeeModule) }, { path: 'delete-employee', loadChildren: () => import('./delete-employee/delete-employee.module').then(m => m.DeleteEmployeeModule) }, { path: 'employee-list', loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListModule) }, { path: 'search-employee-list', loadChildren: () => import('./search-employee/search-employee.module').then(m => m.SearchEmployeeModule) }, { path: 'begin-comp', loadChildren: () => import('./begin-comp/begin-comp.module').then(m => m.BeginCompModule) }, { path: 'add-department', loadChildren: () => import('./add-department/add-department.module').then(m => m.AddDepartmentModule) }, { path: 'department-list', loadChildren: () => import('./department-list/department-list.module').then(m => m.DepartmentListModule) }];

const routes: Routes = [
  {path: '', loadChildren: () => import('./begin-comp/begin-comp.module').then(m => m.BeginCompModule)},
  { path: 'add-department', loadChildren: () => import('./add-department/add-department.module').then(m => m.AddDepartmentModule) },
  { path: 'add-employee', loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeeModule) }, 
  { path: 'delete-employee', loadChildren: () => import('./delete-employee/delete-employee.module').then(m => m.DeleteEmployeeModule) },
  { path: 'department-list', loadChildren: () => import('./department-list/department-list.module').then(m => m.DepartmentListModule) }, 
  { path: 'edit-employee', loadChildren: () => import('./edit-employee/edit-employee.module').then(m => m.EditEmployeeModule) }, 
  { path: 'employee-list', loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListModule) },
  { path: 'search-employee', loadChildren: () => import('./search-employee/search-employee.module').then(m => m.SearchEmployeeModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
