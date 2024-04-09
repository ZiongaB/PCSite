import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router,RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule, NgIf, RouterOutlet, RouterLink],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss'
})
export class StartpageComponent {

}
