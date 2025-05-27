import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputsComponent } from '../../../shared/components/inputs/inputs.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    InputsComponent,
    RouterModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  private _authService = inject(AuthService);
  private router = inject(Router);
  onSubmit() {
    const { name, email, password } = this.registerForm.value;
    this._authService.register({ id: 0, name, email, password }).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert(err.message),
    });
  }
}
