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
  @ViewChild('TestCheckboxTemp') tempCheckbox: ElementRef<HTMLInputElement> | undefined;
  protected readonly title = signal('HRM');

  header: string = "App Component";

  a: number = 5.1;
  b: number = 7;

  secondTitle: string = "The user is active";
  secondTitl2 = signal("The user is active");

  isChecked: boolean = true;
  isChecked2 = signal<boolean>(true);

  dothis: string = this.isChecked ? "True" : "false"; // ischecked

  changeCheckbox() {
    // this.isChecked2.set(false);

    // this.isChecked = !this.isChecked;
    // // this.isChecked = value;
    // this.dothis = this.isChecked ? "True" : "false"
    // return "";
    // this.isChecked = <boolean>this.tempCheckbox?.nativeElement.checked;
    console.log("Reached");
  }

  handleChildEvent(value: string) {
    this.header = value;
  }
}

// One way Binding

// Two way Binding