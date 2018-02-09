import { Component } from '@angular/core';
import { MessageService } from './mablib/message.service';
import { HelloService } from './mablib/hello.service';

@Component({
  selector: 'mablib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mablib';

  constructor(private messageService: MessageService,
  private helloService: HelloService) { }

  double(val: number): number {
    return this.helloService.double(val);
  }

  createMessage(message: string) {
    this.messageService.add(message);
  }
}
