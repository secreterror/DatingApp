import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/_model/Member';



@Injectable({
  providedIn: 'root'
})


export class MemberService {

  baseUrl="https://localhost:5001/api/";

  constructor(private http:HttpClient) { }


  getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'Users')
  }
  getMember(username:string){
    return this.http.get<Member>(this.baseUrl+'Users/'+username)
  }



}
