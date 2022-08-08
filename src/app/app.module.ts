import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AsideComponent } from './shared/aside/aside.component';
import { MainComponent } from './shared/main/main.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ForgotpasswordComponent } from './public/forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './public/recoverpassword/recoverpassword.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
