import { NgModule } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {TreeModule} from 'primeng/tree';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import {TieredMenuModule} from 'primeng/tieredmenu';
const PrimeModules =[
  TreeTableModule,
  MultiSelectModule,
  TableModule,
  SliderModule,
  ButtonModule,
  TreeModule,
  RippleModule,
  SplitButtonModule,
  ToggleButtonModule,
  BreadcrumbModule,
  MenuModule,
  CalendarModule ,
  TooltipModule,
  OverlayPanelModule,TieredMenuModule,
  DialogModule
]

@NgModule({
 
  imports: [
    PrimeModules
  ],
  exports:[
    PrimeModules
  ]
})
export class PrimeNgModule { }
