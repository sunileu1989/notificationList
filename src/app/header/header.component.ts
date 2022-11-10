import { Component, OnInit } from '@angular/core';
import { NotificationListService } from '../services/notification-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public notificationData: any;
  constructor(public notificationListService: NotificationListService) { }

  ngOnInit(): void {
    this.notificationListService.onNotificationDataUpdate.subscribe((data: any) => {
      this.notificationData= data;
      console.log(this.notificationData);
      })
  }

}
