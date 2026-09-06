import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  username: string = '';
  password: string = '';

  userReactiveForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl<string>(''),
  });

  onSubmit(): void {
    // have to create won logic for more here 
    console.log(this.username);
    console.log(this.password);
  }
  
  onSubmitTemplate(formData: NgForm): void {
    console.log(formData);
  }

  onSubmitReactive(): void {
    if(this.userReactiveForm.invalid){
      console.log("Invalid")
      return;
    }
    console.log(this.userReactiveForm.value);
  }

}