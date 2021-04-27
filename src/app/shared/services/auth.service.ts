import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any): any {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  private setToken(resp: any): any {
    if (resp) {
      const expData = new Date(new Date().getTime() + +resp.expiresIn * 1000);
      localStorage.setItem('fb-token-expire', expData.toString());
      localStorage.setItem('fb-token', resp.idToken);
      return;
    }

    localStorage.clear();
  }

  get token(): any {
    const expData = new Date(localStorage['fb-token-expire']);
    if (new Date() > expData) {
      this.logout();
      return;
    }

    return localStorage.getItem('fb-token');
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthentificated(): boolean {
    return !!this.token;
  }
}
