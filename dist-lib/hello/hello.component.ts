import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'mablib-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  favoriteWord = 'elephant';
  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  createMessage(message: string) {
      this.messageService.add(message);
  }
}
