import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion'
import { AppComponent } from 'src/app/app.component';
import { MenuComponent } from 'src/app/menu/menu/menu.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    
    
  ]
})
export class MaterialModule {


 }
