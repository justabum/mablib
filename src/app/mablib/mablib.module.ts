import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { HelloService } from './hello.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  providers: [ /* Don't add the services here for shared libraries */ ]
})
export class MablibModule {
  // Add providers here instead, and add to import in app.module.ts
  static forRoot() {
    return {
      ngModule: MablibModule,
      providers: [ HelloService ]
    };
  }
}
