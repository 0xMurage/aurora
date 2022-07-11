import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AuthenticatedComponent
} from "./shared/widgets/layouts/authenticated/authenticated.component";
import {
  UnauthenticatedComponent
} from "./shared/widgets/layouts/unauthenticated/unauthenticated.component";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    AuthenticatedComponent,
    UnauthenticatedComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
