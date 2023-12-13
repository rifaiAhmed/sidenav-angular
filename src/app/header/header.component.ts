import { Component, HostListener, Input } from '@angular/core';
import { notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowAsOverLay = false;
  notifications = notifications;
  userItems = userItems;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.checkcanShowAsOverLay(window.innerWidth)
  }

  ngOnInit(): void {
    this.checkcanShowAsOverLay(window.innerWidth)
  }

  getHeaderClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkcanShowAsOverLay(innerWidth: number):void {
    if (innerWidth < 845) {
      this.canShowAsOverLay = true;
    } else {
      this.canShowAsOverLay = false;
    }
  }
}
