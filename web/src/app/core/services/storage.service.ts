import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable()
export class StorageService {

  private _userAccountCleared: Subject<boolean> = new Subject<boolean>();
  private cache: { [ key: string ]: any } = {};

  constructor() {
    this.storageChangesListener();
  }

  get storageCacheKeys() {
    return {
      current_user: 'authenticated_user'
    }
  }

  get user(): UserModel | null {
    if (this.cache[ this.storageCacheKeys.current_user ]) {
      return this.cache[ this.storageCacheKeys.current_user ]
    }

    const u = window.localStorage.getItem('user');

    if (u) {
      this.cache[ this.storageCacheKeys.current_user ] = JSON.parse(u);
      return this.cache[ this.storageCacheKeys.current_user ];
    }
    return null;
  }

  /**
   *
   * @param user
   */
  set user(user: UserModel | null) {
    this.cache[ this.storageCacheKeys.current_user ] = user;
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    } else {
      window.localStorage.removeItem('user');
    }
  }

  get userAccountCleared(): Observable<boolean> {
    return this._userAccountCleared;
  }

  private storageChangesListener() {
    window.addEventListener('storage', () => {
      if (!this.user) {
        this._userAccountCleared.next(false);
      } else {
        this._userAccountCleared.next(true);
      }
    })
  }
}
