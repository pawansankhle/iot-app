
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { SharedModule } from './shared';
import { LayoutModule } from './layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService, AuthEventHandlerService } from './auth/services';
import { LocationService } from './shared/services/location.service';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { MaterialModule } from './shared/modules/material.module';
import { MessageService } from './shared/services/message.service';
import { DeviceService } from './shared/modules/device/device.service';
import { ErrorMessageService } from './shared/services/error.message.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    LoaderModule,
    MaterialModule,
    ],
  exports: [ MaterialModule ],
  providers: [
    AuthService,
    AuthEventHandlerService,
    LocationService,
    DeviceService,
    MessageService,
    ErrorMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
