import { Component, OnInit } from '@angular/core';
import { Member } from 'src/_model/Member';
import { MemberService } from 'src/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members:Member[];
  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers(){
    this.memberService.getMembers().subscribe(mem=>{
      console.log(mem);
      this.members=mem;
    })
  }

}
