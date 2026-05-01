import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { APIModel } from '../../../Model/dashboard';
import { DashboardService } from '../../../services/dashboard.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-tiles',
  imports: [CommonModule, FormsModule],
  templateUrl: './top-tiles.html',
  styleUrl: './top-tiles.css',
})
export class TopTiles implements OnInit  {


   constructor(private service: DashboardService) {}

    apiCards = [
    {
      label: 'Total APIs',
      value: 48,
      note: 'Across internal and external services',
      tone: 'primary',
    },
    {
      label: 'Active Collections',
      value: 12,
      note: 'Grouped by domain and business flow',
      tone: 'secondary',
    },
    {
      label: 'Healthy Endpoints',
      value: '96%',
      note: 'Based on the latest availability checks',
      tone: 'accent',
    },
  ];


  searchText: string = '';
apiList: APIModel[] = [];
filteredList: APIModel[] = [];

ngOnInit() {
  this.loadApis();
}

loadApis() {
  this.service.getAllApi().subscribe(res => {
    this.apiList = res;
    this.filteredList = res;
  });
}

filterApis() {
  const search = this.searchText.toLowerCase();

  this.filteredList = this.apiList.filter(api =>
    api.name.toLowerCase().includes(search) ||
    api.category.toLowerCase().includes(search) ||
    api.method.toLowerCase().includes(search)
  );
}

 
}
