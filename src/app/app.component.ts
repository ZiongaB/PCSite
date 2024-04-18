import { Component, NgModule } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StorypageComponent } from './storypages/storypage/storypage.component';
import { StartpageComponent } from './resourcepages/startpage/startpage.component';
import { PartspageComponent } from './resourcepages/partspage/partspage.component';
import { ResourcesComponent } from './resourcepages/resources/resources.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterModule, NavbarComponent,HomepageComponent,
    StorypageComponent, StartpageComponent,PartspageComponent, ResourcesComponent],
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'PCSite';
}
