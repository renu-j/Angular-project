import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-state-management',
  imports: [],
  styleUrl: './state-management.scss',
  templateUrl: './state-management.html',
})
export class StateManagement {

  name: string = 'Ram';
  displayName: string = '';

  changeDisplayName() {
    this.displayName = 'Hello, ' + this.name;
  }

  nameSignal = signal('Ram');

  displayNameSignal = computed(() => {
    return 'Hello, ' + this.nameSignal();
  });

    constructor(){
    effect(()=>{
      console.log("hello from console," + this.nameSignal());
    } 
  }
  //observable/rjxs (tarditional industry standard)
  name$ =new BehaviourSubject<string>("Ram");
  displayName$= this.names$.pipe(
    map(()=> "hello",+this,name$)
  );
  changeName(value:string){
    this.names$.next(value);// thsi is the traditional way 
  }
}