import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrivateModule { }
