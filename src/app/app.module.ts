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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    SidebarComponent,
    PagenotfoundComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
