import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/pages/user/user.service';
import { User } from 'src/app/pages/user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit {
  @Input('btnText') buttonText: string = '';

  buttonWidth: string = '450px';
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let user = this.activatedRoute.snapshot.data['user'];

    if (user.birth) {
      const [day, month, year] = user.birth.split('/');
      const formatedDate = `${year}-${month}-${day}`;

      user = { ...user, birth: formatedDate };
    }

    this.form = this.fb.group({
      id: [user.id],
      name: [user.name, Validators.required],
      email: [user.email, Validators.required],
      birth: [user.birth, Validators.required],
      city: [user.city, Validators.required],
      develop: [user.develop, Validators.required],
      react: [user.react],
      node: [user.node],
      angular: [user.angular],
      vue: [user.vue],
      gender: [user.gender, Validators.required],
    });
  }

  hasError(field?: string) {
    if (field) {
      return this.form.get(field).errors;
    } else {
      return !this.form.valid;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      const [year, month, day] = this.form.value.birth.split('-');
      const formatedDate = `${day}/${month}/${year}`;

      const form = { ...this.form.value, birth: formatedDate };

      if (this.form.value.id) {
        this.service.update(form).subscribe(
          () => {
            alert('usuário atualizado com sucesso');
            this.router.navigate(['/user']);
          },
          () => alert('ocorreu um erro ao atualizar usuário')
        );
      } else {
        this.service.create(form).subscribe(
          () => {
            alert('usuário criado com sucesso');
            this.router.navigate(['/user']);
          },
          () => alert('ocorreu um erro ao criar usuário')
        );
      }
    }
  }

  onCancel() {
    this.router.navigate(['user']);
  }
}
