import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  @Input() notificationData: any;
  constructor() { }

  ngOnInit(): void {
    console.log("notificationData", this.notificationData)
  }

}
