import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { Router } from "@angular/router";
import "rxjs/Rx";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {

    public input: any;
    public constructor(private router: Router, private _itemService: SuperadminService) {
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
    data;
    validationFailed: boolean = false;

    donorSignup(data) {
        var donorData = {
            name: data.name,
            email: data.email,
            password: data.password,
            type: "donor",
            details: {
                age: data.age,
                weight: data.weight,
                donationDate: data.donationDate,
                bloodGroup: data.bloodGroup,
                contactNumber: data.contactNumber,
                address: data.address
            }
        }
        console.log(donorData, "out")
        if (this.validateSignup(data)) {
            var url = "signup"
            console.log(data, 'data from form')
            this._itemService.signup(url, donorData).subscribe(
                (data1) => {
                    console.log(data1, "donor data after signup");
                    this.router.navigate(['/login'])

                },
                (err) => {
                    return err
                }
            )
        } else {
            // alert("jffjjfj");
            console.log("in error")

            this.validationFailed = true
        }
    }
    // donorSignup(data) {
    //     var user = {
    //         name: data.name,
    //         email: data.email,
    //         password: data.password
    //     }
    //     console.log("out")
    //     if (this.validateSignup(data)) {
    //         var url = "signup"
    //         console.log(data, 'data from form')
    //         this._itemService.signup(url, data).subscribe(
    //             (data1) => {
    //                 console.log(data1, "donor data after signup");
    //                 if (data1.status == 200) {
    //                     data.userId = data1.data._id
    //                     let url = "addDonor"
    //                     this._itemService.signup(url, data).subscribe(
    //                         (data) => {
    //                             console.log(data, "donor data after add in db");
    //                             if (data.status == 200) {

    //                                 this.router.navigate(['/login'])
    //                             }
    //                         },
    //                         (err) => {
    //                             return err
    //                         }
    //                     )
    //                 }
    //             },
    //             (err) => {
    //                 return err
    //             }
    //         )
    //     } else {
    //         // alert("jffjjfj");
    //         console.log("in error")

    //         this.validation = true
    //     }
    // }
}
