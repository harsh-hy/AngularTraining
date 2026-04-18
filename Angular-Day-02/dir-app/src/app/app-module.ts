import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { IfExample } from './if-example/if-example';
import { SwitchExample } from './switch-example/switch-example';
import { Second } from './second/second';
import { PipeeExample } from './pipee-example/pipee-example';

@NgModule({
  declarations: [App, IfExample, SwitchExample, Second, PipeeExample],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
