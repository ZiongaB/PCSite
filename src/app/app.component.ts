import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, NavbarComponent],
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'PCSite';
}
