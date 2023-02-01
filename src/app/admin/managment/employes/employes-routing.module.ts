import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { EmployesComponent } from './employes.component';

const routes: Routes = [
  {path:"",component : EmployesComponent},
  {path:'add',component:AddEmployesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
