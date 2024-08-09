import { Component, OnInit } from '@angular/core';
import { Toiletery } from 'src/app/model_dir/Toiletery';
import { GroceriesService } from 'src/app/service_dir/groceries.service';

@Component({
  selector: 'app-toiltery',
  templateUrl: './toiltery.component.html',
  styleUrls: ['./toiltery.component.css']
})
export class ToilteryComponent implements OnInit {
  sortByName = "toiletryName";
  sortByType = "toiletryType";

  toiletries: Toiletery[]= []
  constructor(private toiletryService:GroceriesService) { }

  ngOnInit(): void {
    this.toiletryService.getToileteries(this.sortByName).subscribe(response => {
      this.toiletries = response.toiletriesList;
    });
  }


  getListSortByType(){
    this.toiletryService.getToileteries(this.sortByType).subscribe(response => {
      this.toiletries = response.toiletriesList;
    });
  }
  getToiletriesClass(type: string): string {
    switch(type) {
      case 'Baby Lotion':
      case 'Baby Oil':
      case 'Baby Powder':
        return 'toiletryType1'; // Group 1
      case 'Bath Bomb':
      case 'Body Lotion':
      case 'Body Scrub':
      case 'Body Wash':
      case 'Cleansing Milk':
        return 'toiletryType2'; // Group 2
      case 'Face Cleanser':
      case 'Face Cream':
      case 'Face Gel':
      case 'Face Mask':
      case 'Face Mist':
      case 'Face Wash':
        return 'toiletryType3'; // Group 3
      case 'Hair Conditioner':
      case 'Hand Wash':
      case 'Lip Care':
      case 'Micellar Water':
      case 'Moisturizer':
      case 'Night Cream':
      case 'Post Shave Balm':
      case 'Shampoo':
      case 'Shaving Gel':
      case 'Skin Cleanser':
      case 'Soap':
      case 'Talcum Powder':
        return 'toiletryType4'; // Group 4
      default:
        return '';
    }
  }
  
}
