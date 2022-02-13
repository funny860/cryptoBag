import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getUserDetails(username: any, password: any) {
    //post user credentials to api server

    return this.http
      .post('/api/auth.php', { username, password })
      .subscribe((data) => {
        console.log(data, 'this is that what we got ');
      });
  }
}
