import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/header/header';
import { Dashboard } from './components/dashboard-section/dashboard/dashboard';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Dashboard, RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Library-app');
}
