import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DoublePipe } from '../pipes/double-pipe';

@Component({
  imports: [DatePipe, CurrencyPipe, LowerCasePipe, DoublePipe],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {

  userDetail: UserDetail = {
    username: 'User name',
    fees: 1300,
    dob: new Date
  }

}

export interface UserDetail {
  username: string,
  fees: number,
  dob: Date
}