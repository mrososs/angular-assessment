import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError, map, delay, switchMap, of } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from '../../core/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient);
  private _storage = inject(StorageService);
  private usersUrl = 'assets/data/user.json'; // fake API

  login(name: string, password: string): Observable<boolean> {
    return this._http.get<User[]>(this.usersUrl).pipe(
      delay(1000),
      map((users) => {
        const user = users.find(
          (u) => u.name === name && u.password === password
        );
        if (!user) throw new Error('Invalid credentials');
        this._storage.setItem('username', user.name);
        return true;
      })
    );
  }

  register(newUser: User): Observable<boolean> {
    return this._http.get<User[]>(this.usersUrl).pipe(
      delay(1000),
      switchMap((users) => {
        const exists = users.some((u) => u.email === newUser.email);
        if (exists)
          return throwError(() => new Error('Email already registered'));
        this._storage.setItem('username', newUser.name);
        return of(true);
      })
    );
  }

  logout() {
    this._storage.removeItem('username');
  }

  isAuthenticated() {
    return !!this._storage.getItem('username');
  }

  getUserName(): string | null {
    return this._storage.getItem('username');
  }
}
