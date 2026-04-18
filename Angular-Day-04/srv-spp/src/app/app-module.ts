import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cust1 } from './cust1/cust1';
import { Cust2 } from './cust2/cust2';
import { AsyncpipeEx } from './asyncpipe-ex/asyncpipe-ex';
import { Nav } from './nav/nav';
import { CubePipe } from './cube-pipe';
import { DataPipe } from './data-pipe';
import { ServiceExample } from './service-example/service-example';

@NgModule({
  declarations: [App, Cust1, Cust2, AsyncpipeEx, Nav, CubePipe, DataPipe, ServiceExample],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
