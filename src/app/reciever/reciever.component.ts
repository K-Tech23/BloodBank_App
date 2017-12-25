import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { Router } from "@angular/router";
import "rxjs/Rx";
@Component({
    selector: 'app-reciever',
    templateUrl: './reciever.component.html',
    styleUrls: ['../login/login.component.css']
})
export class RecieverComponent implements OnInit {

    public input: any;
    public constructor(private http: Http, private router: Router, private _itemService: SuperadminService) {
        this.input = {};

    }


    ngOnInit() {
    }
    validateSignup(body) {
        console.log(body, "body")
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[0-9])))(?=.{6,})");
        if (body.name != null && body.email != null && body.password != null) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email) && mediumRegex.test(body.password)) {
                return true;
            }
        } else {
            return false;
        }   ///*** Add Email regex here as well */

    }
    validationFailed: boolean = false;
    data;
    recieverSignup(data) {
        var recieverData = {
            name: data.name,
            email: data.email,
            password: data.password,
            type : "reciever",
            details :{
                bloodGroup : data.bloodGroup,
                contactNumber : data.contactNumber,
                address : data.address
            }
        }
        console.log(recieverData,"out")
        if (this.validateSignup(data)) {
            var url = "signup"
            console.log(data, 'data from form')
            this._itemService.signup(url, recieverData).subscribe(
                (data1) => {
                    console.log(data1, "recver data after signup");
                },
                (err) => {
                    return err
                }
            )
        } else {
            this.validationFailed = true
            
        }
    }
}
