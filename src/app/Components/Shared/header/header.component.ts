import { Component } from '@angular/core';
// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //mobileMenuWidth: any = "-100%";
  mobileMenuWidth: any = "hidden"
  openCloseMenu: boolean = false;
  mobileMenu() {
    this.openCloseMenu = !this.openCloseMenu;
    console.log(this.openCloseMenu);
    if (this.openCloseMenu == true) {
      this.mobileMenuWidth = ""
    }
    if (this.openCloseMenu == false) {
      this.mobileMenuWidth = "hidden"
    }
  }
}
