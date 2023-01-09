import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import LoginComponent from './login/login.component';
import { SideBarComponent } from './managment/side-bar/side-bar.component';

const routes: Routes = [
  {path : '',component : LoginComponent},
  {path : 'management' ,canActivate : [AuthGuard], component : SideBarComponent , children : [
    {path : '',redirectTo : 'management/rooms',pathMatch: 'full'},
    {path : 'rooms',loadChildren : ()=>import('./managment/rooms/rooms.module').then((m)=>m.RoomsModule)}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
