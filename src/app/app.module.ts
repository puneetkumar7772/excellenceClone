import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MobileapplicationComponent } from './pages/mobileapplication/mobileapplication.component';
import { EcommercepageComponent } from './pages/ecommercepage/ecommercepage.component';
import { BackendcomponentComponent } from './pages/backendcomponent/backendcomponent.component';
import { MainhomeComponent } from './pages/mainhome/mainhome.component';
import { CloudDeploymentComponent } from './pages/cloud-deployment/cloud-deployment.component';
import { ScrollTriggerDirective } from './scroll-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    CareerComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    MobileapplicationComponent,
    EcommercepageComponent,
    BackendcomponentComponent,
    MainhomeComponent,
    CloudDeploymentComponent,
    ScrollTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
