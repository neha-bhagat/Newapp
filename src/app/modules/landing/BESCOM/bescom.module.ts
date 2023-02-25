import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BescomRoutingModule } from './bescom-routing.module';
import { BescomComponent } from './bescom.component';
import { BescomDashboardComponent } from './bescom-dashboard/bescom-dashboard.component';
import { BescomSidenavComponent } from './bescom-dashboard/components/bescom-sidenav/bescom-sidenav.component';
import { SidenavComponent } from './bescom-dashboard/components/sidenav/sidenav.component';

@NgModule({
  declarations: [BescomComponent],
  imports: [BrowserModule, BescomRoutingModule],
  exports:[]
})
export class BescomModule {}
