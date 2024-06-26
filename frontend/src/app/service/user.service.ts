import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:3000/api/users';
  list$: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  get(id: number = 0) {
    if (!id) {
      return this.http
        .get<User[]>(`${this.apiUrl}`)
        .forEach((users) => this.list$.next(users));
    } else {
      return this.http.get<User>(`${this.apiUrl}/${id}`);
    }
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  delete(user: User): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${user.id}`).pipe(
      tap((data) => {
        this.get();
      })
    );
  }
}
