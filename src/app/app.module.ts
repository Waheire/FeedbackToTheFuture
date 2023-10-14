import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './Components/Shared/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DonorsComponent } from './Components/Shared/donors/donors.component';
import { TeamsComponent } from './Components/Shared/teams/teams.component';
import { InternshipComponent } from './Components/Shared/internship/internship.component';
import { LogoCarouselComponent } from './Components/Shared/logo-carousel/logo-carousel.component';


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
    NotFoundComponent,
    CarouselComponent,
    DonorsComponent,
    TeamsComponent,
    InternshipComponent,
    LogoCarouselComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
