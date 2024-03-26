import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}
  reset(regForm: NgForm) {
    regForm.reset();
  }
  register(regForm: NgForm) {
    console.log(regForm.value);
    // this.router.navigate(['/login']);
    this.authService.registerUser(regForm.value.email, regForm.value.password);
  }
}
