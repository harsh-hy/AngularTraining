import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navigation } from './navigation/navigation';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Product } from './product/product';
import { About } from './about/about';
import { PipeExample } from './pipe-example/pipe-example';

@NgModule({
  declarations: [App, Navigation, Home, Contact, Product, About, PipeExample],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
