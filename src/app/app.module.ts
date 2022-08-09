import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';

import { AppComponent } from './app.component';
import { AsideComponent } from './shared/aside/aside.component';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
