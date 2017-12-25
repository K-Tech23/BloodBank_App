import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "./super-admin.component.service";
import { SuperAdmin } from "./super-admin";
import { clone } from 'lodash';
import { Router } from "@angular/router";

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {


  itemsForm: boolean = false;
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {};
  editedItems: any = {};

  items: SuperAdmin[] = [{
    id: 1,
    BloodBankName: 'Hussaini Blood Bank',
    Branch: 'Nazimabad',
    Incharge: 'Muhammad Yaqoob'
  }, {
    id: 2,
    BloodBankName: 'Taba Blood Bank',
    Branch: 'Johar',
    Incharge: 'Muhammad Noman'
  }, {
    id: 3,
    BloodBankName: 'Agha Blood Bank',
    Branch: 'Gulshan',
    Incharge: 'Muhammad Ali'
  }]

  constructor(private _itemService: SuperadminService,private user:UserService) { }

  ngOnInit() {
   
  }
//   getItems() {
//     this._itemService.getItems().subscribe(
//       (data) => {
//         console.log(data);
//         return data
//       },
//       (err) => {
//         return err
//       }
//     )
//   }

//   showEditItemsForm(items: SuperAdmin) {
//     if (!items) {
//       this.itemsForm = false;
//       return;
//     }
//     this.editItemsForm = true;
//     this.editedItems = clone(items);
//   }

//   showAddItemsForm() {
//     // resets form if edited items
//     if (this.items.length) {
//       this.newItems = {};
//     }
//     this.itemsForm = true;
//     this.isNewForm = true;
//   }

//   saveItems(items: SuperAdmin) {
//     if (this.isNewForm) {
//       // add a new items
//       this._itemService.addItems(items);
//     }
//     this.itemsForm = false;
//   }

//   removeItems(items: SuperAdmin) {
//     this._itemService.deleteItems(items);
//   }

//   updateItems() {
//     this._itemService.updateItems(this.editedItems);
//     this.editItemsForm = false;
//     this.editedItems = {};
//   }

//   cancelNewItems() {
//     this.newItems = {};
//     this.itemsForm = false;
//   }

//   cancelEdits() {
//     this.editedItems = {};
//     this.editItemsForm = false;
//   }

}



