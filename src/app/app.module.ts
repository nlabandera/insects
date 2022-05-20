import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsectsComponent } from './insects/insects.component';
import { InsectDetailsComponent } from './insect-details/insect-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsectsComponent,
    InsectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: InsectsComponent},
      { path: 'insects/:insectId', component: InsectDetailsComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
