import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Routing */
import { AppRoutingModule } from './app-routing.module';

/** Components */
import { AppComponent } from './app.component';
import { SharedLayoutComponent } from './shared/components/shared-layout/shared-layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

/** Services */
import { AuthService } from './shared/services/auth.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SharedLayoutComponent,
    MainPageComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
