import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { AdminRoutingModule } from './admin-routing.module';

/** Components */
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    ProductAddComponent,
    DashboardComponent,
    ProductEditComponent,
    OrdersComponent
  ],
  exports: [],
})
export class AdminModule {}
