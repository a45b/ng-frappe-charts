import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrappeDirective } from './frappe.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FrappeDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
