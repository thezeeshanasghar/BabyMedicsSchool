import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {AndroidExoplayer} from '@ionic-native/android-exoplayer/ngx'
import { Downloader } from '@ionic-native/downloader/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import{FileTransfer} from '@ionic-native/file-transfer/ngx'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AndroidPermissions,AndroidExoplayer,Downloader,File,FileOpener,FileTransfer],
  bootstrap: [AppComponent],
})
export class AppModule {}
