import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router,RouterOutlet, RouterLink } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatCommonModule} from '@angular/material/core';
import {MatButtonModule} from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatAutocompleteModule}from "@angular/material/autocomplete";
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';




@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterOutlet,RouterLink, NavbarComponent, MatSidenav, MatSidenavModule, 
    MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule,
  MatAutocompleteModule, MatSelectModule, MatChipsModule, MatCommonModule,MatMenuModule],
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{
  isAuthenticated = false;

  constructor(private router:Router, ){}

    //Sebastian start
    isMenuOpen = false;

    // toggleMenu
    toogleMenu():void{
      this.isMenuOpen = !this.isMenuOpen;
    }

  }
 // Andrews work ends here
