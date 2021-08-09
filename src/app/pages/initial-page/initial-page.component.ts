import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.sass'],
})
export class InitialPageComponent implements OnInit {
  textButton: string = 'Entrar';
  buttonWidth: string = '300px';

  form: FormGroup;
  submitted = false;
  invalidData = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  hasError(field?: string) {
    if(this.invalidData) return true
    if (field) {
      return this.form.get(field).errors;
    } else {
      return !this.form.valid;
    }
  }

  onSubmit() {
    const values = this.form.value;
    this.submitted = true;

    if (this.form.valid) {
      this.invalidData = false;
      if (
        values.email === 'concert' &&
        values.password === 'prova'
      ) {
        this.router.navigate(['home']);
      } else {
        this.invalidData = true;
      }
    }
  }
}
