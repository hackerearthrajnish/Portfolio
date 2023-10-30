import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { project } from 'src/_models/project';
import { ProjectModelComponent } from '../project-model/project-model.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() Project = {} as project;
  modalRef?: BsModalRef;

  colors = ['red', 'darkred', 'green', 'orange', 'brown', 'purple']

  constructor(private modalService: BsModalService) { }


  openModal() {
    const modalOptions : ModalOptions ={
       class : 'modal-lg',
       initialState:{
         project : this.Project
       }
    }
    this.modalRef = this.modalService.show(ProjectModelComponent , modalOptions);
  }
  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
