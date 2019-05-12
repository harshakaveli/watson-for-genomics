import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CasesComponent } from './components/cases/cases.component';
import { SamplesComponent } from './components/samples/samples.component';
import { ReportsComponent } from './components/reports/reports.component';

const watsonForGenomicsRoutes: Routes = [
  {
    path: 'cases',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: CasesComponent
      }
    ]
  },
  {
    path: 'samples',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: SamplesComponent
      }
    ]
  },
  {
    path: 'reports',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ReportsComponent
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
