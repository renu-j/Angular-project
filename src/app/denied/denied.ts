import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-denied',
  styleUrl: './denied.scss',
  templateUrl: './denied.html',
})
export class Denied {

  getLocalStorage() {
    console.log(JSON.parse(<string>localStorage.getItem('userDetail')));
  }
  setLocalStorage() {
    localStorage.setItem('userDetail', JSON.stringify({ id: 'EFJSJNFNF',name:'Hari' }));
  }
  getSessionStorage() {
    console.log(sessionStorage.getItem('userId'));
  }
  setSessionStorage() {
    sessionStorage.setItem('userId', 'EFJSJNFNF');
  }
}