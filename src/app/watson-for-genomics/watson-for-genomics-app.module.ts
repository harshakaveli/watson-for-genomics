import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WatsonForGenomicsRoutingModule } from './watson-for-genomics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WatsonForGenomicsRoutingModule
  ],
  declarations: [
    NavigationComponent,
    DashboardComponent,
  ],
  entryComponents: [],
  providers: []
})
export class WatsonForGenomicModule {}
