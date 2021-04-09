import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PromoComponent } from './promo/promo.component';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidemenuComponent, PromoComponent],
  imports: [
    CommonModule
  ]
})
export class DmoduleModule { }
