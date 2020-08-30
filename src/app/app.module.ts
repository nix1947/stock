import { MaterialModule } from './dashboard/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './dashboard/nav/nav.component';
import { CompanyDetailComponent } from './dashboard/company/company-detail/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
