import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from 'src/app/pages/local/local.service';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.sass'],
})
export class LocalFormComponent implements OnInit {
  @Input('btnText') buttonText: string = '';

  buttonWidth: string = '450px';
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: LocalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let local = this.activatedRoute.snapshot.data['local'];

    this.form = this.fb.group({
      id: [local.id],
      responsable: [local.responsable, Validators.required],
      local: [local.local, Validators.required],
      opportunity: [local.opportunity, Validators.required],
      employee: [local.employee, Validators.required],
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
      const form = this.form.value;

      if (this.form.value.id) {
        this.service.update(form).subscribe(
          () => {
            alert('Local atualizado com sucesso');
            this.router.navigate(['/local']);
          },
          () => alert('ocorreu um erro ao atualizar local')
        );
      } else {
        this.service.create(form).subscribe(
          () => {
            alert('local criado com sucesso');
            this.router.navigate(['/local']);
          },
          () => alert('ocorreu um erro ao criar local')
        );
      }
    }
  }

  onCancel() {
    this.router.navigate(['local']);
  }
}
