import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/_model/User';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user :any={};
  loggedIn:boolean;
  constructor(private accountService:AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  login(){
    this.accountService.login(this.user).subscribe(response=>{
      console.log(response);
      this.loggedIn=true;
      this.router.navigateByUrl('/members')
    },err=>{
      console.log(err)
      this.toastr.error(err.error)
    });
    console.log(this.user)

  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.loggedIn=false;

  }

  getCurrentUser(){
    this.accountService.currentUser.subscribe(u=>{
      this.loggedIn=!!u;
      if(u){
        this.user.username=u.userName
      }
    },err=>{
      console.log(err);
    })
  }
 
}
