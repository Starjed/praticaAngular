import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {RegistrosLojasComponent} from './registros-lojas/registros-lojas.component';
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    RegistrosLojasComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
