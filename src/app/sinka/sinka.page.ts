import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor() { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  sinka = [
    {
      id: 1,
      name: 'โค้ก',
      price: 15,
      detail: 'Coke',
      imageURL: '/assets/imageForApp/inchiken.jpg'
    },
    {
      id: 2,
      name: 'น้ำเปล่า',
      price: 7,
      detail: 'Water',
      imageURL: '/assets/imageForApp/พะโล้.jpg'
    }, {
      id: 3,
      name: 'น้ำสปอนเซอร์',
      price: 15,
      detail: 'Sponser',
      imageURL: '/assets/imageForApp/greencurry.jpg'
    }, {
      id: 4,
      name: 'แป๊ปซี่',
      price: 30,
      detail: 'Stir-fried Cabbage',
      imageURL: '/assets/imageForApp/กะหล่ำ.jpg'
    }, {
      id: 5,
      name: 'น้ำชาลิปตัน',
      price: 17,
      detail: 'Lipton tea',
      imageURL: '/assets/imageForApp/กะเพาไก่สับ.jpg'
    }, {
      id: 6,
      name: 'ผัดพริกแกงผักบุ้ง',
      price: 35,
      detail: 'Stir-fried Water Spinach',
      imageURL: '/assets/imageForApp/พริกแกงผักบุ้ง.jpg'
    }, {
      id: 7,
      name: 'ผัดกวางตุ้งใต้หวัน',
      price: 35,
      detail: 'Stir-fried Cantonese',
      imageURL: '/assets/imageForApp/กวางตุ้ง.jpg'
    }, {
      id: 8,
      name: 'ผัดไก่พริกแกงใต้',
      price: 35,
      detail: 'Stir-fried Chicken with Southern Curry Paste',
      imageURL: '/assets/imageForApp/ไก่พริกแกง.jpg'
    }, {
      id: 9,
      name: 'ไข่ดาว',
      price: 10,
      detail: 'fried egg',
      imageURL: '/assets/imageForApp/ไข่ดาว.jpg'
    },


  ]
}
