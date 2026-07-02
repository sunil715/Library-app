import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopTiles } from '../top-tiles/top-tiles';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TopTiles],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
