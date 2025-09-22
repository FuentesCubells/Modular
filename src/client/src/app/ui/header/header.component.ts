import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'crm-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // cuidado, es style**s**Urls
})
export class HeaderComponent {
  isAsideOpen = false;
  @Output() openAside = new EventEmitter<boolean>();

  handleOpenAside() {
    this.isAsideOpen = !this.isAsideOpen;
    this.openAside.emit(this.isAsideOpen); 
  }
}
