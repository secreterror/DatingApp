import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user :any={}
  loggedIn:boolean;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  login(){
    this.accountService.login(this.user).subscribe(response=>{
      console.log(response);
      this.loggedIn=true;
    },err=>{
      console.log(err)
    });
    console.log(this.user)

  }
  logout(){
    this.accountService.logout();
    this.loggedIn=false;
  }

  getCurrentUser(){
    this.accountService.currentUser.subscribe(user=>{
      this.loggedIn=!!user;
    },err=>{
      console.log(err);
    })
  }
 
}
