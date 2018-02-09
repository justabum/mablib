import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MablibModule } from './mablib/mablib.module';
import { MessageService } from './mablib/message.service';
import { MessagesComponent } from './mablib/messages/messages.component';
import { HelloService } from './mablib/hello.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    MablibModule.forRoot()  // only if MablibModule needs a service
  ],
  providers: [MessageService, HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
