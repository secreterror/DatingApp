import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testerrors',
  templateUrl: './testerrors.component.html',
  styleUrls: ['./testerrors.component.css']
})
export class TesterrorsComponent implements OnInit {

  baseUrl="https://localhost:5001/api/";

  validationErrors:string[]=[]

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    
  }
  get404Error(){
    this.http.get(this.baseUrl+ 'bug/not-found').subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  get400Error(){
    this.http.get(this.baseUrl+ 'bug/bad-request').subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  get500Error(){
    this.http.get(this.baseUrl+ 'bug/server-error').subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  get401Error(){
    this.http.get(this.baseUrl+ 'bug/auth').subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  get400ValidationError(){
    this.http.post(this.baseUrl+ 'account/register',{}).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
      this.validationErrors=err;
    })
  }

}
