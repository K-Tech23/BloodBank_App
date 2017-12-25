import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";
import { clone } from 'lodash';
@Component({
  selector: 'app-recprof',
  templateUrl: './recprof.component.html',
  styleUrls: ['./recprof.component.css']
})
export class RecprofComponent implements OnInit {
  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {};
  editedItems: any = {};
  items: {}
  data;
  constructor(private _itemService: SuperadminService,private user: UserService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    var currentUser = localStorage.getItem('currentUser')
    var user = JSON.parse(currentUser)
    console.log(user.UserId, 'type')
    var url = "bloodBankUser" + "/" + user.UserId
    console.log(url, "url")
    this._itemService.getItems(url).subscribe(
      (data) => {
        console.log(data.userData, "login reciver data");
        this.data = data.userData
      },
      (err) => {
        return err
      }
    )
  }

  updateItems(data) {
    console.log(data._id, "id")
    var url = "editReciever" + "/" + data._id
    console.log(url, "jhf")
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
    if (!items) {
      this.itemsForm = false;
      return;
    }
    this.editItemsForm = true;
    this.editedItems = clone(items);
  }

  cancelEdits() {
    this.editedItems = {};
    this.editItemsForm = false;
  }
}