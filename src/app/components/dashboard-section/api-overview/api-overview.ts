import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-overview',
  imports: [CommonModule],
  templateUrl: './api-overview.html',
  styleUrl: './api-overview.css',
})
export class ApiOverview {

   popularApis = [
    {
      name: 'User Management API',
      category: 'Identity',
      calls: '14.2k',
      status: 'Stable',
    },
    {
      name: 'Books Catalog API',
      category: 'Library Core',
      calls: '10.8k',
      status: 'High Traffic',
    },
    {
      name: 'Payments Gateway API',
      category: 'Billing',
      calls: '8.6k',
      status: 'Monitored',
    },
    {
      name: 'Notification API',
      category: 'Messaging',
      calls: '7.1k',
      status: 'Stable',
    },
  ];

  recentlyUsedApis = [
    {
      name: 'Loans API',
      action: 'Fetched overdue records',
      time: '5 min ago',
    },
    {
      name: 'Members API',
      action: 'Updated profile details',
      time: '18 min ago',
    },
    {
      name: 'Search Index API',
      action: 'Synced keyword cache',
      time: '42 min ago',
    },
    {
      name: 'Reports API',
      action: 'Generated monthly summary',
      time: '1 hr ago',
    },
  ];
}
