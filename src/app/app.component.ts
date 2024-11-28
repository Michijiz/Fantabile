import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimaPaginaComponent } from './prima-pagina/prima-pagina.component';

@Component({
  selector: 'app-root',
  imports: [PrimaPaginaComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  today: Date = new Date();
  title = 'fanta';
}
