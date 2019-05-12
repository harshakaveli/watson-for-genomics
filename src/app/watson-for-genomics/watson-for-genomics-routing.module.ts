import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const watsonForGenomicsRoutes: Routes = [
  {
    path: 'cases',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(watsonForGenomicsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WatsonForGenomicsRoutingModule { }
