import { AirplaneService } from './Services/airplane.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AddAirplaneComponent } from './add-airplane/add-airplane.component';
import { ListAirplaneComponent } from './list-airplane/list-airplane.component';
import { EditAirplaneComponent } from './edit-airplane/edit-airplane.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAirplaneComponent,
    ListAirplaneComponent,
    EditAirplaneComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
