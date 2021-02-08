import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister =new EventEmitter();

  user :any={};

  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.user).subscribe(res=>{
      this.cancel()
    },err=>{
      this.toastr.error(err.error);
    })
    console.log(this.user);
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
  

}
