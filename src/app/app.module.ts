import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component_dir/dashboard/dashboard.component';
import { GroceriesComponent } from './component_dir/groceries/groceries.component';
import { NavbarComponent } from './component_dir/navbar/navbar.component';
import { MedicineComponent } from './component_dir/medicine/medicine.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './component_dir/products/products.component';
import { ToilteryComponent } from './component_dir/toiltery/toiltery.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroceriesComponent,
    NavbarComponent,
    MedicineComponent,
    SidebarComponent,
    ProductsComponent,
    ToilteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
