import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';


@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
