import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  //variables such a title and items
  title = "Grocery";
  items = [];

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public alertCtrl: AlertController) {

  }

  /***
   * This function adds the new grocery item to the list
   */
  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

/***
   * This function shows the alert pop up to allow user to enter item name and quantity
   * and finally saves the item into the list
   * push() is used to add item to the list of items
   */
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      header: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }

/***
   * This function removes the selected item from the list of items
   * splice() is used to remove item from the list of items
   */  
  removeItem(item, index){
    console.log("Removing item - ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
    this.items.splice(index, 1);
  }

}
