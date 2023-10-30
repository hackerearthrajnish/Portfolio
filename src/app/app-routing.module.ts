import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch :"full"},
  {path:'home', component: HomeComponent},
  {path:'resume', component: ResumeComponent},
  {path:'contact', component: ContactComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'about', component: AboutComponent},
  {path:'**', redirectTo:'home' , pathMatch :"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
