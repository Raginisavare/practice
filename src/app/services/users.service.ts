import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private url='http://localhost:3005/users';
 
  constructor(private http: HttpClient){}

  insertStd(data: any): Observable<any>{
      console.log(data);
      return this.http.post<any>(this.url, data);
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
