export interface BookModel {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: string;
  publisher: string;
  publishedYear: number;
  totalCopies: number;
  availableCopies: number;
  language: string;
  shelfLocation: string;
  status: boolean;
}