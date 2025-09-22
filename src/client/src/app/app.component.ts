import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./ui/menu/menu.component";
import { HeaderComponent } from './ui/header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  isAsideOpen: boolean = false;

  handleOpenAside( isAsideOpen: boolean ){
    console.log(isAsideOpen);
    this.isAsideOpen = isAsideOpen;
  }
}
