import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../../../Model/dashboard';

@Component({
  selector: 'app-top-tiles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-tiles.html',
  styleUrl: './top-tiles.css',
})
export class TopTiles implements OnInit {

  searchText: string = '';

  bookList: BookModel[] = [];
  filteredBooks: BookModel[] = [];

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
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Programming',
        isbn: '9780132350884',
        publisher: 'Prentice Hall',
        publishedYear: 2008,
        totalCopies: 10,
        availableCopies: 4,
        language: 'English',
        shelfLocation: 'A-101',
        status: true,
      },
      {
        id: 2,
        title: 'Angular in Action',
        author: 'Jeremy Wilken',
        category: 'Web Development',
        isbn: '9781617293313',
        publisher: 'Manning',
        publishedYear: 2018,
        totalCopies: 8,
        availableCopies: 2,
        language: 'English',
        shelfLocation: 'A-102',
        status: true,
      },
      {
        id: 3,
        title: 'Design Patterns',
        author: 'Erich Gamma',
        category: 'Software Engineering',
        isbn: '9780201633610',
        publisher: 'Addison-Wesley',
        publishedYear: 1994,
        totalCopies: 5,
        availableCopies: 0,
        language: 'English',
        shelfLocation: 'B-201',
        status: false,
      },
      {
        id: 4,
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        category: 'Programming',
        isbn: '9780135957059',
        publisher: 'Addison-Wesley',
        publishedYear: 2019,
        totalCopies: 6,
        availableCopies: 3,
        language: 'English',
        shelfLocation: 'B-105',
        status: true,
      },
      {
        id: 5,
        title: 'Java: The Complete Reference',
        author: 'Herbert Schildt',
        category: 'Java',
        isbn: '9781260440232',
        publisher: 'McGraw Hill',
        publishedYear: 2021,
        totalCopies: 7,
        availableCopies: 1,
        language: 'English',
        shelfLocation: 'C-110',
        status: true,
      },
      {
        id: 6,
        title: 'Learning SQL',
        author: 'Alan Beaulieu',
        category: 'Database',
        isbn: '9780596520830',
        publisher: "O'Reilly",
        publishedYear: 2020,
        totalCopies: 4,
        availableCopies: 0,
        language: 'English',
        shelfLocation: 'D-120',
        status: false,
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

}