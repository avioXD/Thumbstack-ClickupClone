import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
//Material Module: 
import { AgularMaterialModule} from "./modules/agular-material/agular-material.module"
//prime module
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

 
import { HttpClientModule } from '@angular/common/http';
 

////Components: 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ProductsCardComponent } from './layout/products-card/products-card.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './dialogs/video/video.component';
import { SwiperModule } from 'swiper/angular';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { PhaseComponent } from './components/phase/phase.component';
import { TodosComponent } from './components/phase/todos/todos.component';
import { NewTaskComponent } from './components/phase/new-task/new-task.component';
import { TaskComponent } from './components/phase/task/task.component';

 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsCardComponent,
    HomeComponent,
    VideoComponent,
    TasksComponent,
    ListViewComponent,
    PhaseComponent,
    TodosComponent,
    NewTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgularMaterialModule,
    FormsModule,
    SwiperModule,
    PrimeNgModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
