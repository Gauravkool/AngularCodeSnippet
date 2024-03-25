import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  reset(regForm: NgForm) {
    regForm.reset();
  }
  register(regForm: NgForm) {
    console.log(regForm.value);
  }
}
