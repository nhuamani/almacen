import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecoverPasswordComponent } from './recoverpassword/recoverpassword.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
