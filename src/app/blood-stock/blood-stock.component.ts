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

//   data= {
//   a1: 2,
//   a2: 3,
//   b1: 4,
//   b2: 2,
//   ab1: 1,
//   ab2: 4,
//   o1: 5,
//   o2: 0
// }
data;
constructor(private _itemService: SuperadminService) { }

ngOnInit() {
  this.getItems();
}

getItems() {
  var id = localStorage.getItem("currentUser")
  var url = "bloodBankUser" + "/" + JSON.parse(id);
  
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
