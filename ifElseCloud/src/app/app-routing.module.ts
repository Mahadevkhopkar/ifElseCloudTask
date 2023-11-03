import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopDataCardDashboardComponent } from './top-data-card-dashboard/top-data-card-dashboard.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path :'topDataCardDashboard',component:TopDataCardDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
