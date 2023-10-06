import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:MainhomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'career',component:CareerComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'services/mobileapplication',component:MobileapplicationComponent},
  {path:'services/ecommerceapplication',component:EcommercepageComponent},
  {path:'services/backend-api-database',component:BackendcomponentComponent},
  {path:'services/cloud-devops',component:CloudDeploymentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
