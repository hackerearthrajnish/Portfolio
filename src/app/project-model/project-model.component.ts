import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { project } from 'src/_models/project';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent implements OnInit {
  project = {} as project;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
   
    // You can now access this.project in your template
  }
}