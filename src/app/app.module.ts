import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import link component
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
// import { AboutComponent } from './about/about.component';

// other imports here
import { FormsModule } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add form Module here
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
