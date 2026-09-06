import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  private router = inject(Router);

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('')
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsDirty();
      return;
    }

    console.log(this.userForm.controls.username.value);

    // this.router.navigate(['/dashboard'], {
    //   state: { data: this.userForm.value }
    // });
    this.router.navigate(['/dashboard'], {
      queryParams: { data: JSON.stringify(this.userForm.value) }
    });
  }
}