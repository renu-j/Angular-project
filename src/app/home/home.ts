import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  @Input () parentValue: boolean= false;
   @Output () childEvent = new EventEmitter<string>;

   btnClicked(){
    this.childEvent.emit("Child message");
   }

}
