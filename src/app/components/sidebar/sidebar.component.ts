import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  screenWidth = window.innerWidth;

  navLinks = [
    { path: '/my-documents', icon: 'fa-solid fa-file', label: 'Mis documentos' },
    { path: '/my-reviews', icon: 'fa-solid fa-eye', label: 'Mis revisiones' },
    // Agrega más aquí...
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}
