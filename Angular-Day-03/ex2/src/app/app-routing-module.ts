import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpList } from './emp-list/emp-list';
import { EmpDetail } from './emp-detail/emp-detail';

const routes: Routes = [
  {path:'',component:EmpList},
  {path:'emp/:id',component:EmpDetail},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
