import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'muuri';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blockItems: string[] = ['Add Message Functionality', 'Display All Messages'];

    // Add any options you'd like to set here
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

    addToGrid() {
    this.blockItems.push('Task');
  }

}
