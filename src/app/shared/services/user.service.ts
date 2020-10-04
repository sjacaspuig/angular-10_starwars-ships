import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cacheService: CacheService) { }

  public getAll(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.getUsers());
      subscriber.complete();
    });
  }

  public getById(id: any): Observable<any> {
    return new Observable(subscriber => {
      const filtered = this.getUsers().filter(user => user.id === id);
      const unicUser = filtered.length ? filtered[0] : null;
      subscriber.next(unicUser);
      subscriber.complete();
    });
  }

  public getByUsername(username: any): Observable<any> {
    return new Observable(subscriber => {
      const filtered = this.getUsers().filter( user => user.username === username);
      const unicUser = filtered.length ? filtered[0] : null;
      subscriber.next(unicUser);
      subscriber.complete();
    });
  }

  public create(user: any): Observable<any> {
    // simulate api call with $timeout
    return new Observable( subscriber => {
      setTimeout(() => {
        this.getByUsername(user.username)
        .subscribe( duplicateUser => {
          if (duplicateUser !== null) {
            subscriber.next({success: false, message: 'Username "' + user.username + '" is already taken' });
          } else {
              const users = this.getUsers();

              // assign id
              const lastUser = users[users.length - 1] || { id: 0 };
              user.id = lastUser.id + 1;

              // save to local storage
              users.push(user);
              this.setUsers(users);

              subscriber.next({ success: true });
          }
          subscriber.complete();
        });
      }, 1000);
    });
  }

  public update(user: any): Observable<any> {
    return new Observable(subscriber => {
      const users = this.getUsers();
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === user.id) {
          users[i] = user;
          break;
        }
      }
      this.setUsers(users);
      subscriber.complete();
    });
  }

  public delete(id: any): Observable<any> {
    return new Observable(subscriber => {
      const users = this.getUsers();
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
          users.splice(i, 1);
          break;
        }
      }
      this.setUsers(users);
      subscriber.complete();
    });
  }

  private getUsers(): any {
    const users: any = this.cacheService.load('users');
    return users ? users : [];
  }

  private setUsers(users): void {
    this.cacheService.save({key: 'users', data: users});
  }


}
