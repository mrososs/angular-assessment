import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InputsComponent } from '../../../shared/components/inputs/inputs.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputsComponent,
    RouterModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  private _authService = inject(AuthService);
  private router = inject(Router);
onSubmit() {
  const { name, password } = this.loginForm.value;
  this._authService.login(name, password).subscribe({
    next: () => this.router.navigate(['/']),
    error: (err) => alert(err.message),
  });
}
}
