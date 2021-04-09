import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dmodule/dashboard/dashboard.component';
import { HeaderComponent } from './dmodule/header/header.component';
import { SidemenuComponent } from './dmodule/sidemenu/sidemenu.component';
import { PromoComponent } from './dmodule/promo/promo.component';

import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'sidemenu',
    component:SidemenuComponent
  },
  {
    path:'promo',
    component:PromoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
