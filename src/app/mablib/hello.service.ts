import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  double(val: number): number {
    return val * 2;
  }
}
