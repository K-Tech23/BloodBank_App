import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";
import { clone } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'lodash';
import { Router } from "@angular/router";

@Component({
  selector: 'app-recieverslist',
  templateUrl: './recieverslist.component.html',
  styleUrls: ['./recieverslist.component.css']
})
export class RecieverslistComponent implements OnInit {
  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {
    type:"reciever",
    details:{}
  };
  editedItems: any = {};

  ngOnInit() {
    this.getItems();

  }

  constructor(private _itemService: SuperadminService) { }

  data;
  getItems() {
    var url = 'allBloodBankUser' + "/" + "receiver";
    console.log(url, "url")
    this._itemService.getItems(url).subscribe(
      (data) => {
        console.log(data.userData, "login reciver data");
        this.data = data.userData;
      },
      (err) => {
        return err
      }
    )
  }
  updateItems(data) {
    console.log(data, "id")
    var url = "editBloodBankUser" + "/" + data._id
    console.log(url, "jhfjhhfjfjfjjhjfjhf")
    this._itemService.editItems(url, data).subscribe(
      (data) => {
        console.log(data, "fgdfg");
        this.data = data.donorData
        this.getItems()
        this.editItemsForm = false
      },
      (err) => {
        return err
      }
    )
  }


  deleteItems(data) {
    console.log(data, "data")
    var url = 'deleteBloodBankUser'

    this._itemService.deleteItems(url + '/' + data._id).subscribe(data => {
      console.log(data, "data from db")
      this.getItems();
    },
      err => {
        console.error(err, "errpr")
      })
  }


  addItems(data) {
    console.log(data, "daata in add")
    var url = "signup"
    this._itemService.signup(url, data).subscribe(
      (data) => {
        console.log(data, "fgdfg");
        this.data = data.donorData
        this.getItems()
        this.itemsForm = false
      },
      (err) => {
        return err
      }
    )
  }
  // updateItems() {
  //   var url="bloodBanks"
  //   this._itemService.getItems(url).subscribe(
  //     (data) => {
  //       console.log(data.recieverData._id,"fgdfg");
  //       this.data= data.recieverData
  //     },
  //     (err) => {
  //       return err
  //     }
  //   )
  // }
  showEditItemsForm(items) {
    if (!items) {
      this.itemsForm = false;
      return;
    }
    this.editItemsForm = true;
    this.editedItems = clone(items);
  }

  showAddItemsForm() {
    this.itemsForm = true;
    this.isNewForm = true;
  }

  // saveItems(items: SuperAdmin) {
  //   if(this.isNewForm) {
  //     // add a new items
  //     this._itemService.addItems(items);
  //   }
  //   this.itemsForm = false;
  // }

  // removeItems(items: SuperAdmin) {
  //   this._itemService.deleteItems(items);
  // }

  // updateItems() {
  //   this._itemService.updateItems(this.editedItems);
  //   this.editItemsForm = false;
  //   this.editedItems = {};
  // }


}









