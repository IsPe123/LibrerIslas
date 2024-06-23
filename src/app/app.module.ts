import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { FormsModule } from '@angular/forms';
import { LibrerislasAboutComponent } from './librerislas-about/librerislas-about.component';
import { CartComponent } from './cart/cart.component';
import { LibrerislasIndexComponent } from './librerislas-index/librerislas-index.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibrerislasAboutComponent,
    CartComponent,
    LibrerislasIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
