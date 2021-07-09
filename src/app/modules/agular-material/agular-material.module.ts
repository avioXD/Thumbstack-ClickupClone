import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field';
const AngularMaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatDividerModule, 
  MatDatepickerModule,
  MatFormFieldModule,
  MatDialogModule,
  DragDropModule
]
@NgModule({
  imports: [AngularMaterialComponents],
  exports: [AngularMaterialComponents]
})
export class AgularMaterialModule { }
