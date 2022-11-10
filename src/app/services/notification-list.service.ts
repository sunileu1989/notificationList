import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NotificationListService {
  private notificationDataUpdateSource =  new BehaviorSubject<any>("");
  onNotificationDataUpdate = this.notificationDataUpdateSource.asObservable();
  
  constructor() { }

  updateNotificationData(message: any) {
    this.notificationDataUpdateSource.next(message);
  }
}

 