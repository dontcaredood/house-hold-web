import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/model_dir/Grocery';
import { GroceriesService } from 'src/app/service_dir/groceries.service';
@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  constructor(private groceriesService: GroceriesService) { }

  groceries:Grocery[] = [];

  ngOnInit(): void {
    this.groceriesService.getGroceries().subscribe(response => {
      console.log("Data "+response)
      this.groceries = response.groceriesList;
      
    });
  }

  getGroceryClass(groceryType: string): string {
    switch (groceryType.toLowerCase()) {
      case 'fruit':
        return 'fruit';
      case 'vegetable':
        return 'vegetable';
      case 'spice':
        return 'spice';
      case 'grain':
        return 'grain';
      case 'dairy':
        return 'dairy';
      case 'snacks':
        return 'snacks';
      case 'beverage':
        return 'beverage';
      case 'sweetener':
        return 'sweetener';
      default:
        return 'default';
    }
  }

}
