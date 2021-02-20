import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridOptions } from 'muuri';
import { Member } from 'src/_model/Member';
import { MemberService } from 'src/_services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member:Member;

  constructor(private memberService:MemberService,private route:ActivatedRoute) { }
  public layoutConfig: GridOptions = {
    items: [],
    layoutOnInit: false,
    dragEnabled: true,
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    layout: {
    fillGaps: true,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: true}
};

  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member=>{

      this.member=member;
    })
  }

}
