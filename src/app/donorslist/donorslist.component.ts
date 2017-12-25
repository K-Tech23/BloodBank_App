import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";
import { Router } from "@angular/router";
import { clone } from 'lodash';

@Component({
  selector: 'app-donorslist',
  templateUrl: './donorslist.component.html',
  styleUrls: ['./donorslist.component.css']
})
export class DonorslistComponent implements OnInit {

  items: SuperAdmin[];
  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {
    type:"donor",
    details: {}
  };
  editedItems: any = {};



  constructor(private _itemService: SuperadminService) { }

  ngOnInit() {
    this.getItems()
  }

  data;
  getItems() {
    var url = 'allBloodBankUser' + "/" + "donor";
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
      },
      (err) => {
        return err
      }
    )
  }
  showEditItemsForm(items) {
    console.log(items, "edit form")
    if (!items) {
      this.itemsForm = false;
      return;
    }
    this.editItemsForm = true;
    this.editedItems = clone(items);
  }


  showDonorForm() {
    // resets form if edited items
    this.itemsForm = true;
    this.isNewForm = true;
  }
}






















