import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroTableComponent } from './super-hero-table/super-hero-table.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SuperHeroTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondProject';
}
