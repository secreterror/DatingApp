import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators'
import { User } from 'src/_model/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="https://localhost:5001/api/";
  private currentUserSource= new ReplaySubject<User>(1);

  currentUser=this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }


  login(user :any){

    return this.http.post(this.baseUrl + 'account/login', user).pipe(
      map((response:User)=>{
        const user=response;

        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    )
  }
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  register(user:any){
    return this.http.post(this.baseUrl+"account/register",user).pipe(
      map((u:User)=>{

        if(u){
          localStorage.setItem('user',JSON.stringify(u));
          this.currentUserSource.next(u);
        }
        return u;
      })


    )
  }
}
