import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.formulario.valid) {
      this.router.navigate(['/my-documents']);
    } else {
      Object.keys(this.formulario.controls).forEach((key) => {
        this.formulario.get(key)?.markAsTouched();
      });
    }
  }
}
