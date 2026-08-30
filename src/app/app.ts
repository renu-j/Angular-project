import {
  Component,
  ElementRef,
  ViewChild,
  signal
} from '@angular/core';
 
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
 
  @ViewChild('TestCheckboxTemp')
  tempCheckbox!: ElementRef<HTMLInputElement>;
 
  protected readonly title = signal('hrm');
 
  header: string = "Second Line Data Binding";
 
  a: number = 5;
  b: number = 7;
 
  isChecked: boolean = false;
 
  dothis: string = this.isChecked ? "True" : "False";
 
  isChecked2 = signal(true);
 
 
  // Called when checkbox state changes
  changeCheckbox(): void {
 
    console.log("Reached");
 
    console.log("Checkbox value:", this.isChecked);
 
  }
 
 
  // Example using ViewChild
  getCheckboxValue(): void {
 
    if (this.tempCheckbox) {
 
      console.log(
        "Checked:",
        this.tempCheckbox.nativeElement.checked
      );
 
    }
 
  }
 
}