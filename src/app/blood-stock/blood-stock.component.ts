import { Component, OnInit } from '@angular/core';
import { SuperadminService } from "../super-admin/super-admin.component.service";
import { SuperAdmin } from "../super-admin/super-admin";

@Component({
  selector: 'app-blood-stock',
  templateUrl: './blood-stock.component.html',
  styleUrls: ['./blood-stock.component.css']
})
export class BloodStockComponent implements OnInit {
  
  editItemsForm: boolean = false;
  isNewForm: boolean;
  newItems: any = {};
  editedItems: any = {};

data;
constructor(private _itemService: SuperadminService) { }

ngOnInit() {
  this.getItems();
}

getItems() {
  var currentUser = localStorage.getItem("currentUser")
  var user = JSON.parse(currentUser)  
  var url = "bloodBnakUser"+"/"+user.UserId
  this._itemService.getItems(url).subscribe(
    (data) => {
      console.log(data.recieverData, "fgdfg");
      this.data = data.recieverData
    },
    (err) => {
      return err
    }
  )
}
updateItems(data) {
  console.log(data, "update")
  var url = "editBloodBankUser" + "/" + data._id
  console.log(url, "jhfjhhfjfjfjjhjfjhf")
  this._itemService.editItems(url, data).subscribe(
    (data) => {
      console.log(data, "fgdfg");
      this.data = data.recieverData
      this.getItems();
    },
    (err) => {
      return err
    }
  )
}
addItems(data) {
  var url = "editBloodBankUser"
  this._itemService.addItems(url, data).subscribe(
    (data) => {
      console.log(data, "add items");
      this.data = data.recieverData
      this.getItems()
    },
    (err) => {
      return err
    }
  )
}
cancelEdits(){
  
  this.editItemsForm = false;
}
showAdminForm() {
  this.editItemsForm = true;
}

}
