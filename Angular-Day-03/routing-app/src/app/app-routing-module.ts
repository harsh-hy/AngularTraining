import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { PipeExample } from './pipe-example/pipe-example';



const routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'product', component: Product },
  { path: 'pipe-example', component: PipeExample },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
