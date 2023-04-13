import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { dataListComponent } from './components/data-list/data-list.component';
import { FilterPipe } from './shared/filter.pipe';

import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DataCreateComponent } from './components/data-create/data-create.component';
import { DataUpdateComponent } from './components/data-update/data-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    dataListComponent,
    FilterPipe,
    DataCreateComponent,
    DataUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
