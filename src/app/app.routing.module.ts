import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateRoutingModule } from "./private/private.routing.module";

import { LoginComponent } from "./public/login/login.component";
import { PageNotFoundComponent } from "./shared/pagenotfound/pagenotfound.component";


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PrivateRoutingModule
    ],
    exports: [
        CommonModule,
        RouterModule
    ]
})
export class AppRoutingModule { }