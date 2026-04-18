import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cust1 } from './cust1/cust1';
import { Cust2 } from './cust2/cust2';
import { AsyncpipeEx } from './asyncpipe-ex/asyncpipe-ex';
import { Welcome } from './welcome';
import { ServiceExample } from './service-example/service-example';

const routes: Routes = [
  {path: '', component: Cust1},
  {path: 'cust1', component: Cust1},
  {path: 'cust2', component: Cust2},
  {path: 'asyncpipe', component: AsyncpipeEx},
  {path: 'serviceEx', component: ServiceExample}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
