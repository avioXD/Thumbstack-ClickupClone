import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { GanttComponent } from './component/gantt/gantt.component';
import { BoardComponent } from './component/board/board.component';
import { ViewComponent } from './component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GanttComponent,
    BoardComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
