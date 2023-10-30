import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectDetailsService } from 'src/_service/project-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   FeaturedProjects :any;

   constructor(private titleService : Title , private projectDetailsService : ProjectDetailsService ,
      private router : Router){
      this.titleService.setTitle('Rajnish -home')
   }

   ngOnInit(): void {
      this.FeaturedProjects = this.projectDetailsService.getProductById(1);
      console.log(this.FeaturedProjects.pitures)
   }

   GoToAboutUs(){
      this.router.navigate(['about'])
   }
}
