import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RGBComponent } from './rgb/rgb.component';
import { RPSComponent } from './rps/rps.component';

@NgModule({
  declarations: [AppComponent, RGBComponent, RPSComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
