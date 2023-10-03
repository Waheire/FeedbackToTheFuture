import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeroComponent } from './Components/Shared/hero/hero.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { WhatWeDoComponent } from './Components/Pages/what-we-do/what-we-do.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { SustainabilityComponent } from './Components/Pages/sustainability/sustainability.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { SubscribeComponent } from './Components/Shared/subscribe/subscribe.component';
import { IntroductionComponent } from './Components/Shared/introduction/introduction.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    OurServicesComponent,
    SustainabilityComponent,
    ContactComponent,
    SubscribeComponent,
    IntroductionComponent,
    HomeComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
