import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tag } from 'src/_models/Tag';
import { ProjectDetailsService } from 'src/_service/project-details.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  ProjectData: any;
  isCollapsed: boolean = true;
  model: { [key: string]: boolean } = {
    ' TypeScript': false,
    'React': false,
    'Angular': false,
    'Python': false,
    'C#': false,
    'Java': false,
    'NodeJS': false,

  }

  constructor(private titleService: Title, private projectdataservice: ProjectDetailsService) {
    this.titleService.setTitle('Rajnish - Portfolio')
    this.ProjectData = this.projectdataservice.getProjectdata()
  }

  Filter() {
    let filterTags: string[] = [];

    for (let i in this.model) {
      if (this.model[i]) {
        filterTags.push(i)
      }
    }
    this.ProjectData = this.projectdataservice.getFilteredProject(filterTags)
  }

  ResetFilter() {

    for (let i in this.model) {
      this.model[i] = false;
    }

    this.ProjectData = this.projectdataservice.getProjectdata()
    this.isCollapsed = true;
  }
}
