import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: SuperAdmin[];
  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {};
  editedItems: any = {};


  reciever = [{
    id: 1,
    Name: 'Daren Sammy',
    Loaction: 'Nazimabad',
    BloodGroup: 'O-ve',
    contact: '03312345567'
  }, {
    id: 1,
    Name: 'Daren Sammy',
    Loaction: 'Nazimabad',
    BloodGroup: 'O-ve',
    contact: '03312345567'
  }, {
    id: 1,
    Name: 'Daren Sammy',
    Loaction: 'Nazimabad',
    BloodGroup: 'O-ve',
    contact: '03312345567'
  }]


  constructor(private _itemService: SuperadminService,private user: UserService) { }
  ngOnInit() {
    this.getItems()
  }

  data;
  getItems() {
    var currentUser = localStorage.getItem('currentUser')
    var user = JSON.parse(currentUser)
    console.log(user.UserId,'type')
    var url = "bloodBankUser" + "/" + user.UserId
    // var url = 'bloodBankUser'+"/"+id;
    console.log(url, "url")
    this._itemService.getItems(url).subscribe(
      (data) => {
        console.log(data, "login reciver data");
        this.data = data.userData;
        // for (let i = 0; i < array.length; i++) {
        //   if (array[i].userId === JSON.parse(id)) {
        //     this.data = array[i]
        //     console.log(array[i], "datdfasdasdkasjkdaskdkashk")
        //   }
        // }
      },
      (err) => {
        return err
      }
    )
  }
}


