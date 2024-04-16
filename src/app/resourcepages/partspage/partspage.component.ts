import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router,RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-partspage',
  standalone: true,
  imports: [CommonModule, NgIf, RouterOutlet, RouterLink],
  templateUrl: './partspage.component.html',
  styleUrl: './partspage.component.scss'
})
export class PartspageComponent {

}
