import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAllComponent } from './todo-all/todo-all.component';
@NgModule({
  declarations: [
    AppComponent,TodoAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,MatDatepickerModule,MatButtonModule,MatListModule,MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule,MatMomentDateModule,
    FlexLayoutModule,
    ReactiveFormsModule 
    
  ],
  providers: [{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
