import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";
import { clone } from 'lodash';
@Component({
  selector: 'app-donprof',
  templateUrl: './donprof.component.html',
  styleUrls: ['./donprof.component.css']
})
export class DonprofComponent implements OnInit {
  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {};
  editedItems: any = {};
  items: [{
    name: "",
    email: "",
    age: "",
    weight: "",
    donationDate: "",
    bloodGroup: "",
    address: "",

    phoneNumber: ""
  }]
  data;
  constructor(private _itemService: SuperadminService,private user: UserService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    var currentUser = localStorage.getItem('currentUser')
    var user = JSON.parse(currentUser)
    console.log(user.UserId,'type')
    // console.log(currentUser.UserId,"local staoirfae data")
    var url="bloodBankUser"+"/"+user.UserId
    // var url = 'bloodBankUser'+"/"+id;
    console.log(url, "url")
    this._itemService.getItems(url).subscribe(
      (data) => {
        console.log(data, "login reciver data");
        this.data = data.userData;
        // console.log(JSON.parse(id))
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

  updateItems(data) {
    console.log(data._id, "id")
    var url = "editDonors" + "/" + data._id
    console.log(url, "jhfjhhfjfjfjjhjfjhf")
    this._itemService.editItems(url, data).subscribe(
      (data) => {
        console.log(data, "fgdfg");
        this.data = data.recieverData
      },
      (err) => {
        return err
      }
    )
  }
  showEditItemsForm(items) {
    this.editItemsForm = true;
    this.editedItems = clone(items);
  }

  cancelEdits() {
    this.editedItems = {};
    this.editItemsForm = false;
  }
}
