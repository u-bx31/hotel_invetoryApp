import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { IndexComponent } from './home/index/index.component';
import { RoomViewComponent } from './home/rooms/room-view/room-view.component';
import { RoomsComponent } from './home/rooms/rooms.component';

const routes: Routes = [
  {path : '' , component : IndexComponent , children :[
    {path : 'home',component : HomeComponent},
    {path : 'about',component : AboutComponent},
    {path : 'contact',component : ContactComponent},
    {path : 'rooms',component : RoomsComponent},
    {path : 'rooms/:id',component : RoomViewComponent},
    {path : '' , redirectTo : '/home',pathMatch : 'full'}
  ]},
  {path : 'admin' , loadChildren : ()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
