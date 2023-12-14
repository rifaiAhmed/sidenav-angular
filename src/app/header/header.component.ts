import { Component, HostListener, Input } from '@angular/core';
import { notifications, userItems } from './header-dummy-data';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  logOut(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to exit!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Exit!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      }
    });
  }

  redirectToProfile():void {
    this.router.navigate(['/pages']);
  }

  redirectToSettings():void {
    this.router.navigate(['/settings']);
  }
}
