import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RestService } from './services/rest.service';
import { AppConfiguration } from './services/app-config.service';
import { CommonService } from './services/common.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  entryComponents: [],
  providers: [
    RestService,
    AppConfiguration,
    CommonService,
  ]
})
export class SharedModule { }
