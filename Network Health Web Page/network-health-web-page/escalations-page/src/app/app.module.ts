import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../Modules/MaterialsModule';
import { BCPComponent } from './bcp/bcp.component';


@NgModule({
  declarations: [
    AppComponent,
    BCPComponent, 
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
