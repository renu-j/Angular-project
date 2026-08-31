import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  private router = inject(Router);

  sampleMessage: SampleMessage = {
    message: 'Message',
    location: 'Location'
  }

  goToHome(): void {
    this.router.navigate(['/home'], {
      state: { data: this.sampleMessage }
    });
  }

}

export interface SampleMessage {
  message: string,
  location: string
}