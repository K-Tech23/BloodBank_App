
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent {
  isLoggedIn: boolean = false;
  isSuperAdminLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  isLoggedOut: boolean = true;
  isUserLoggedIn: boolean = false;
  constructor(private router: Router){

  }
  ngOnInit() {
    this.ShowDetails();
  }
  ShowDetails() {
    var currentUser = localStorage.getItem("currentUser");
    var User = JSON.parse(currentUser);
    console.log(User.type, "eye d")


    switch (User.type) {
      case "donor":
        this.isUserLoggedIn = true;
        this.isLoggedIn = true;
        this.isLoggedOut = false;
        break;
      case "reciever":
        this.isUserLoggedIn = true;
        this.isLoggedIn = true;
        this.isLoggedOut = false;
        break;
      case "admin":
        this.isAdminLoggedIn = true;
        this.isLoggedIn = true;
        this.isLoggedOut = false;
        break;
      case "superAdmin":
        this.isSuperAdminLoggedIn = true;
        this.isAdminLoggedIn = true;
        this.isLoggedIn = true;
        this.isLoggedOut = false;
    }
  }
  logout() {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLogin", "false")
    this.router.navigate(['/']);
    this.isLoggedIn = false;
    this.isLoggedOut = true;
    this.isSuperAdminLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.isUserLoggedIn = false;
    
  }
}

