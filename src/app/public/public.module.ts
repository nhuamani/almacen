import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { MainComponent } from '../shared/main/main.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from '../shared/errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    SidebarComponent,
    PagenotfoundComponent,
    ErrorpageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    RecoverpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
