import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Material Module: 
import { AgularMaterialModule} from "./modules/agular-material/agular-material.module"
//
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



////Components: 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ProductsCardComponent } from './layout/products-card/products-card.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './dialogs/video/video.component';
import { SwiperModule } from 'swiper/angular';
import { TasksComponent } from './pages/tasks/tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsCardComponent,
    HomeComponent,
    VideoComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgularMaterialModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
