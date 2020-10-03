import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getAll(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.getUsers());
      subscriber.complete();
    });
  }

  public getById(id: any): Observable<any> {
    return new Observable(subscriber => {
      const filtered = this.getUsers().filter( user => user.id === id);
      const user = filtered.length ? filtered[0] : null;
      subscriber.next(user);
      subscriber.complete();
    });
  }

  public getByUsername(username: any): Observable<any> {
    return new Observable(subscriber => {
      const filtered = this.getUsers().filter( user => user.username === username);
      const user = filtered.length ? filtered[0] : null;
      subscriber.next(user);
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
              let users = this.getUsers();
  
              // assign id
              let lastUser = users[users.length - 1] || { id: 0 };
              user.id = lastUser.id + 1;
  
              // save to local storage
              users.push(user);
              this.setUsers(users);
  
              subscriber.next({ success: true });
          }
          subscriber.complete();
        })
      }, 1000);
    })
  }

  public update(user: any): Observable<any> {
    return new Observable(subscriber => {
      let users = this.getUsers();
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
      let users = this.getUsers();
      for (let i = 0; i < users.length; i++) {
          let user = users[i];
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
    if(!localStorage.users){
        localStorage.users = JSON.stringify([]);
    }
    return JSON.parse(localStorage.users);
  }

  private setUsers(users): void {
      localStorage.users = JSON.stringify(users);
  }
}
