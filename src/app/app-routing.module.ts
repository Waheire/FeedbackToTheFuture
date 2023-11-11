import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { WhatWeDoComponent } from './Components/Pages/what-we-do/what-we-do.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { SustainabilityComponent } from './Components/Pages/sustainability/sustainability.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { LogoSliderComponent } from './Components/Shared/logo-slider/logo-slider.component';
import { BlogComponent } from './Components/Shared/blog/blog.component';
import { BlogPageComponent } from './Components/Pages/blog-page/blog-page.component';
import { SingleBlogPageComponent } from './Components/Pages/single-blog-page/single-blog-page.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'annual-reports', component: SustainabilityComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us/jobs', component: JobsComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:id', component: SingleBlogPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
