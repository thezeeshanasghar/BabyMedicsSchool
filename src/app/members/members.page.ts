import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {


  public appPages = [
    {
      title: 'Form',
      url: '/members/form',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/members/list',
      icon: 'home'
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
