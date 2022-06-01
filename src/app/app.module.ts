import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsectsComponent } from './insects/insects.component';
import { InsectDetailsComponent } from './insect-details/insect-details.component';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsectsComponent,
    InsectDetailsComponent,
    HomeComponent,
    CatsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'cats', component: CatsComponent},
      { path: 'insects', component: InsectsComponent},
      // { path: '',redirectTo:'insects', pathMatch:'full'},
      { path: 'insects/:insectId', component: InsectDetailsComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
