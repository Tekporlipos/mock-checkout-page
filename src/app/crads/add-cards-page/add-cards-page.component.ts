import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cards-page',
  templateUrl: './add-cards-page.component.html',
  styleUrls: ['./add-cards-page.component.css']
})
export class AddCardsPageComponent {
  creditCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.creditCardForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.creditCardForm.valid) {
      console.log('Form submitted', this.creditCardForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
