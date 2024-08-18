import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() project: any; // Recibe datos del proyecto
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
