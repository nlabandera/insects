import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsectsComponent } from './insects/insects.component';
import { InsectDetailsComponent } from './insect-details/insect-details.component';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailsComponent } from './cats/cat-details/cat-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsectsComponent,
    InsectDetailsComponent,
    HomeComponent,
    CatsComponent,
    CatDetailsComponent,
  ],
  imports: [
    MatPaginatorModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cats', component: CatsComponent },
      { path: 'cats/:breedId', component: CatDetailsComponent },
      // { path: 'cats/:breedId',redirectTo:'cats', pathMatch:'full'},
      { path: 'insects', component: InsectsComponent },
      // { path: '',redirectTo:'insects', pathMatch:'full'},
      { path: 'insects/:insectId', component: InsectDetailsComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
