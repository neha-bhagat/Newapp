import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BescomDashboardComponent } from './bescom-dashboard/bescom-dashboard.component'

const routes: Routes = [
  {
    path: 'bescom_deshboard',
    component: BescomDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BescomRoutingModule {}
