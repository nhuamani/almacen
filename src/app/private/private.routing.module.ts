import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeCreateComponent } from "./employee/employee-create/employee-create.component";
import { EmployeeEditComponent } from "./employee/employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeViewComponent } from "./employee/employee-view/employee-view.component";


const routes: Routes = [
    {
        path: 'producto', component: EmployeeComponent,
        children: [
            { path: 'listar', component: EmployeeListComponent },
            { path: 'nuevo', component: EmployeeCreateComponent },
            { path: 'editar', component: EmployeeEditComponent },
            { path: 'detalle', component: EmployeeViewComponent },
        ]
    },
    { path: '**', redirectTo: 'product/list' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PrivateRoutingModule { }
