import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BevDetailComponent } from './bev-detail/bev-detail.component';
import { BevListComponent } from './bev-list/bev-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BevDetailComponent,
    BevListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
