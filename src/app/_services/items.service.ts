import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Item } from '../_types/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>(`${this.url}/items`)
      .pipe(catchError(this.handleError<Item[]>([])));
  }

  getItem(id: number): Observable<Item> {
    return this.http
      .get<Item>(`${this.url}/items/${id}`)
      .pipe(catchError(this.handleError<Item>()));
  }

  addItem(item: Item): Observable<Item> {
    console.log(item)
    return this.http
      .post<Item>(`${this.url}/items`, item, this.httpOptions)
      .pipe(catchError(this.handleError<Item>()));
  }

  private handleError<T>(result?: T) {
    return (): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
