import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoAllComponent} from './todo-all/todo-all.component'

const routes: Routes = [{path:'all',component:TodoAllComponent},
{path:'', redirectTo:'/all',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
