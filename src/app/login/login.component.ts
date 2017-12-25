import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { Http, Headers, RequestOptions } from "@angular/http";

import "rxjs/Rx";



@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public input: any;
    constructor(private http: Http, private router: Router, private _itemService: SuperadminService, private user: UserService) {
        this.input = {
            type: "reciever"
        };
    }

    ngOnInit() {

    }

    validationFailed = false;
    public login(data) {
        console.log("login console")
        var url = 'login'

        this._itemService.login(url, data).subscribe(
            (dbData) => {
                console.log("login console")
                console.log(dbData, "login login");
                if (dbData.status == 200) {
                    localStorage.setItem("isLogin", "true")
                    var currentUser = {
                        UserId: dbData.loginData._id,
                        type: dbData.loginData.type
                    }
                    localStorage.setItem('currentUser', JSON.stringify(currentUser))
                    if (dbData.loginData.type === "donor") {
                        this.user.setUserLoggedIn();
                        this.router.navigate(["/donprofstruct"])

                    } else if (dbData.loginData.type === "reciever") {
                        this.user.setUserLoggedIn();
                        this.router.navigate(["/recprof"])

                    } else if (dbData.loginData.type === "admin") {
                        this.user.setUserLoggedIn();
                        this.router.navigate(["/admin"])

                    }
                } else {
                    this.validationFailed = true;
                    // this.router.navigate(["/login"])

                }

            },
            (err) => {
                return err
            }
        )
    }

}

