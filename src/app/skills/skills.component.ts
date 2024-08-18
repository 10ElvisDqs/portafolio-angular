import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML5',
      img: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
    },
    {
      name: 'CSS3',
      img: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
    },
    {
      name: 'JavaScript',
      img: 'https://logospng.org/download/javascript/logo-javascript-icon-256.png',
    },
    {
      name: 'Project One',
      img: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
    },
    {
      name: 'PYTHON',
      img: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    },
    {
      name: 'JAVA',
      img: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
    },
    {
      name: 'ANGULAR',
      img: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    },
    {
      name: 'VUEJS',
      img: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
    },
    {
      name: 'LARAVEL',
      img: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
    },
    {
      name: 'TAILWIND',
      img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'BOOTSTRAP',
      img: 'https://blog.getbootstrap.com/assets/brand/bootstrap-logo-shadow.png',
    },
    {
      name: 'NESTJS',
      img: 'https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg',
    },
    // Agrega más proyectos según sea necesario
  ];

}
