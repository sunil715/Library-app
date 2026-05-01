import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopTiles } from '../top-tiles/top-tiles';
import { ApiOverview } from '../api-overview/api-overview';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TopTiles, ApiOverview],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
