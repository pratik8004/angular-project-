import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'], 
})
export class LeftSidebarComponent {
  @Input() isLeftSidebarCollapsed!: boolean; 
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items = [
    {
      routeLink: 'products',
      icon: 'fal fa-box-op',
      label: 'Products',
    },
    {
      routeLink: 'dashboard', 
      icon: 'fal fa-ho',
      label: 'Vendors of products',
    },
    {
      routeLink: 'pages', 
      icon: 'fal fa-order',
      label: 'Orders',
    },
    {
      routeLink: 'cart',
      icon: 'fal fa-shopping-',
      label: 'Cart',
    }
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
