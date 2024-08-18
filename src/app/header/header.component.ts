import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  roles = [
    { id: 1, name: 'Fullstack Developer' },
    { id: 2, name: 'Frontend Developer' },
    { id: 3, name: 'Backend Developer' },
    { id: 4, name: 'Mobile Developer' },
    { id: 5, name: 'Data Engineer' }
  ];

  selectedRole = this.roles[0]; // Por defecto, se selecciona el primer rol

  constructor() {}

  ngOnInit(): void {
    // Puedes inicializar cosas aquí si es necesario
  }

  // scrollToSection(section: string): void {
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // }

  // Método para seleccionar un rol (puede ser invocado desde otro componente)
  selectRole(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;  // Asegura que event.target es un HTMLSelectElement
    const roleId = parseInt(selectElement.value, 10);  // Convierte el valor a número
    this.selectedRole = this.roles.find(role => role.id === roleId) || this.roles[0];
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(section: string) {
    // Implement your scroll logic here
    this.closeMobileMenu();
  }

}
