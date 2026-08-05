import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../../../Model/dashboard';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([
  AllCommunityModule
]);

@Component({
  selector: 'app-top-tiles',
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular],
  templateUrl: './top-tiles.html',
  styleUrl: './top-tiles.css',
})
export class TopTiles implements OnInit {

  searchText: string = '';

  bookList: BookModel[] = [];
  filteredBooks: BookModel[] = [];

  showAddPopup = false;

newBook: BookModel = {
  id: 0,
  title: '',
  author: '',
  category: '',
  publisher: '',
  isbn: '',
  publishedYear: new Date().getFullYear(),
  totalCopies: 1,
  availableCopies: 1,
  language: '',
  shelfLocation: '',
  status: true
};
    rowData = [];

  libraryCards = [
    {
      label: 'Total Books',
      value: 2485,
      note: '+12 this month',
      icon: 'fa-book',
      class: 'books-card'
    },
    {
      label: 'Books Issued',
      value: 486,
      note: '+24 this week',
      icon: 'fa-book-reader',
      class: 'issued-card'
    },
    {
      label: 'Available Books',
      value: 1999,
      note: 'Ready to borrow',
      icon: 'fa-circle-check',
      class: 'available-card'
    },
    {
      label: 'Members',
      value: 785,
      note: '+18 new members',
      icon: 'fa-users',
      class: 'member-card'
    },
    {
      label: 'Overdue Books',
      value: 42,
      note: 'Need attention',
      icon: 'fa-clock',
      class: 'overdue-card'
    }
  ];

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookList = [
      {
        id: 1,
        title: 'Angular Development Guide',
        author: 'Engineering Team',
        category: 'Angular',
        isbn: 'ANG-1001',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 20,
        availableCopies: 12,
        language: 'English',
        shelfLocation: 'A-101',
        status: true,
      },
      {
        id: 2,
        title: 'Java Programming Fundamentals',
        author: 'Technical Learning Team',
        category: 'Java',
        isbn: 'JAVA-1002',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 15,
        availableCopies: 7,
        language: 'English',
        shelfLocation: 'A-102',
        status: true,
      },
      {
        id: 3,
        title: 'AWS Cloud Essentials',
        author: 'Cloud Team',
        category: 'AWS',
        isbn: 'AWS-1003',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 18,
        availableCopies: 4,
        language: 'English',
        shelfLocation: 'A-103',
        status: true,
      },
      {
        id: 4,
        title: 'Docker Administration',
        author: 'DevOps Team',
        category: 'Docker',
        isbn: 'DOC-1004',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 12,
        availableCopies: 3,
        language: 'English',
        shelfLocation: 'B-101',
        status: true,
      },
      {
        id: 5,
        title: 'Kubernetes Administration',
        author: 'Platform Team',
        category: 'Kubernetes',
        isbn: 'K8S-1005',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 10,
        availableCopies: 0,
        language: 'English',
        shelfLocation: 'B-102',
        status: false,
      },
      {
        id: 6,
        title: 'SQL Database Handbook',
        author: 'Database Team',
        category: 'SQL',
        isbn: 'SQL-1006',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 14,
        availableCopies: 6,
        language: 'English',
        shelfLocation: 'B-103',
        status: true,
      },
      {
        id: 7,
        title: 'REST API Design Standards',
        author: 'API Engineering Team',
        category: 'API',
        isbn: 'API-1007',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 16,
        availableCopies: 8,
        language: 'English',
        shelfLocation: 'C-101',
        status: true,
      },
      {
        id: 8,
        title: 'Microservices Architecture',
        author: 'Architecture Team',
        category: 'Architecture',
        isbn: 'ARC-1008',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 11,
        availableCopies: 2,
        language: 'English',
        shelfLocation: 'C-102',
        status: true,
      },
      {
        id: 9,
        title: 'CI/CD Pipeline Implementation',
        author: 'DevOps Team',
        category: 'CI/CD',
        isbn: 'CICD-1009',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 9,
        availableCopies: 0,
        language: 'English',
        shelfLocation: 'C-103',
        status: false,
      },
      {
        id: 10,
        title: 'Frontend UI Development',
        author: 'UI Engineering Team',
        category: 'Frontend',
        isbn: 'UI-1010',
        publisher: 'Readify Publications',
        publishedYear: 2025,
        totalCopies: 13,
        availableCopies: 9,
        language: 'English',
        shelfLocation: 'D-101',
        status: true,
      }
    ];

    this.filteredBooks = [...this.bookList];
  }

  filterBooks(): void {

    const search = this.searchText.toLowerCase();

    this.filteredBooks = this.bookList.filter(book =>
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search) ||
      book.publisher.toLowerCase().includes(search) ||
      book.isbn.toLowerCase().includes(search)
    );

  }




  columnDefs: ColDef[] = [

    {
      headerName: 'Resource',
      field: 'title',
      filter: 'agTextColumnFilter',
      tooltipField: 'title',
      minWidth: 220
    },

    {
      field: 'Owner',
      filter: 'agTextColumnFilter',
      tooltipField: 'author',
    },

    {
      field: 'Domain',
      filter: 'agSetColumnFilter',
      tooltipField: 'category',
    },

    {
      field: 'Source',
      filter: 'agTextColumnFilter',
      tooltipField: 'publisher',
    },

    {
      field: 'Reference ID',
      headerName: 'Reference ID',
      filter: 'agTextColumnFilter',
      tooltipField: 'isbn',
    },

    {
      headerName: 'Availability',
      valueGetter: p => `${p.data.availableCopies} / ${p.data.totalCopies}`,
      tooltipValueGetter: p =>
        `Available : ${p.data.availableCopies}
       Total : ${p.data.totalCopies}`,
    },

    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: (params: any) => {
        if (params.value) {
          return `
        <span style="
          padding:6px 14px;
          border-radius:20px;
          background:#dcfce7;
          color:#15803d;
          font-weight:600;
          font-size:12px;
          border:1px solid #86efac;">
          ● Available
        </span>`;
        }

        return `
      <span style="
          padding:6px 14px;
          border-radius:20px;
          background:#fee2e2;
          color:#dc2626;
          font-weight:600;
          font-size:12px;
          border:1px solid #fca5a5;">
          ● Unavailable
      </span>`;
      }
    }

  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: false,
    resizable: true

  };


  JobSummary = {

    core: {
      title: 'Core Services',
      subtitle: 'Solutions offered for enterprise business growth and transformation.',
      details: [
        'Cloud Infrastructure Services',
        'Application Development',
        'AI & Data Analytics Solutions',
        'Enterprise Digital Transformation',
      ]
    },

    announcement: {
      title: 'Recent Announcements',
      subtitle: 'Latest company announcements and strategic updates.',
      details: [
        'New GCC center launched in Bangalore',
        'Hiring planned for 250+ engineers',
        'AI transformation initiative announced',
        'Expansion into cloud managed services',
      ]
    },

    management: {
      title: 'Mid Level Management',
      subtitle: 'Leadership contacts and opportunity stakeholders.',
      details: [
        'Engineering Delivery Manager',
        'Cloud Practice Lead',
        'Program Management Office',
        'Talent Acquisition Head',
      ]
    }

  };

  openAddResource() {
  this.showAddPopup = true;
}

closePopup() {
  this.showAddPopup = false;
}

saveBook() {

  this.newBook.id = this.bookList.length + 1;

  this.bookList.unshift({...this.newBook});

  this.filteredBooks = [...this.bookList];

  this.newBook = {
    id: 0,
    title: '',
    author: '',
    category: '',
    publisher: '',
    isbn: '',
    publishedYear: new Date().getFullYear(),
    totalCopies: 1,
    availableCopies: 1,
    language: '',
    shelfLocation: '',
    status: true
  };

  this.closePopup();
}
}