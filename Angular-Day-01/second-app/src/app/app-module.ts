import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Student } from './student/student';
import { FormsModule } from '@angular/forms';
import { Employees } from './employees/employees';

@NgModule({
  declarations: [App, Student, Employees],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  // bootstrap: [Student, App],
  bootstrap:[Employees],
})
export class AppModule {}
