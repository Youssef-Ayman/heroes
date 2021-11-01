import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HeroService } from './hero.service';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HeroesComponent } from './components/heroes/heroes.component';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  declarations: [
    AppComponent,

    DashboardComponent,

    HeroesComponent,

    HeroDetailComponent,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
