import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component_dir/dashboard/dashboard.component';
import { GroceriesComponent } from './component_dir/groceries/groceries.component';
import { ProductsComponent } from './component_dir/products/products.component';
import { ToilteryComponent } from './component_dir/toiltery/toiltery.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'toiletries', component: ToilteryComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
