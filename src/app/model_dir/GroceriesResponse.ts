import { Grocery } from '../model_dir/Grocery';

export interface GroceriesReponse {
  noOfProducts: number;
  groceriesList: Grocery[];
}
