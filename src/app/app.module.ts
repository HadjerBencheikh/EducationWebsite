import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitCardComponent } from './Components/tit-card/tit-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidNavComponent } from './Components/sid-nav/sid-nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MsgbarComponent } from './Components/msgbar/msgbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitCardComponent,
    SidNavComponent,
    MsgbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
