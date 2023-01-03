import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './managment/side-bar/side-bar.component';

const routes: Routes = [
  {path : '',component : LoginComponent},
  {path : 'management' , component : SideBarComponent , children : [
    {path : 'rooms',loadChildren : ()=>import('./managment/rooms/rooms.module').then((m)=>m.RoomsModule)}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
