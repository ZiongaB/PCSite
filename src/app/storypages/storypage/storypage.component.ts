import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router,RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-storypage',
  standalone: true,
  imports: [CommonModule, NgIf, RouterOutlet, RouterLink],
  templateUrl: './storypage.component.html',
  styleUrl: './storypage.component.scss'
})
export class StorypageComponent {

}
