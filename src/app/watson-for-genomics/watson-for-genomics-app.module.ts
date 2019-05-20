import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WatsonForGenomicsRoutingModule } from './watson-for-genomics-routing.module';
import { CasesComponent } from './components/cases/cases.component';
import { SamplesComponent } from './components/samples/samples.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ListModule, RadioModule, GridModule, ButtonModule, AccordionModule, TabsModule, TilesModule } from "carbon-components-angular";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WatsonForGenomicsRoutingModule,
    ButtonModule,
    ListModule,
    RadioModule,
    GridModule,
    AccordionModule, TabsModule, TilesModule
  ],
  declarations: [
    NavigationComponent,
    CasesComponent,
    SamplesComponent,
    ReportsComponent
  ],
  entryComponents: [],
  providers: []
})
export class WatsonForGenomicModule { }
