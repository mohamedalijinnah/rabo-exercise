import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { nanoid } from 'nanoid';
import { ClientService } from '../../../services/client.service';
import { IClient } from '../client.model';

@Component({
  selector: 'rabo-create',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {}
  isSubmitted: boolean = false;

  clientForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
    streetName: [''],
    houseNumber: [''],
    city: [''],
    postalCode: [''],
  });

  get firstName() {
    return this.clientForm.get('firstName');
  }
  get lastName() {
    return this.clientForm.get('lastName');
  }
  get email() {
    return this.clientForm.get('email');
  }

  saveClient() {
    const formRaw = this.clientForm.getRawValue();
    const formData: IClient = {
      id: nanoid(2),
      email: formRaw.email ?? '',
      firstName: formRaw.firstName ?? '',
      lastName : formRaw.lastName ?? '',
      address: {
        city: formRaw.city ?? '',
        houseNumber: Number(formRaw.houseNumber),
        postalCode: formRaw.postalCode ?? '',
        streetName: formRaw.streetName ?? ''
      }
    }
    this.clientService.saveClient(formData).subscribe({
      next: () => this.router.navigate(['/client']),
    });
  }
}
