import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'crm-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeItem: string = '';
  @Input() isMenuOpen: boolean | undefined;
  menuItems = routes.filter(r => r.data?.["showInMenu"]);

  constructor() {};

  selectItem(item: string) {
    this.activeItem = item;
  }
}
