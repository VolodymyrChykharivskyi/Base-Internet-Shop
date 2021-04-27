import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      returnSecureToken: true
    };

    this.auth.login(user).subscribe((resp: any) => {
      this.loginForm.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    },
    () => {
      this.submitted = false;
    });
  }

}
