import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      shortDescription: 'A brief description of Project One.',
      description: 'A detailed description of Project One. Includes all relevant information and insights.',
      image: 'perfil.png',
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      shortDescription: 'A brief description of Project Two.',
      description: 'A detailed description of Project Two. Includes all relevant information and insights.',
      image: 'perfil.png',
      link: 'https://example.com/project-two'
    }
    // Agrega más proyectos según sea necesario
  ];

}
