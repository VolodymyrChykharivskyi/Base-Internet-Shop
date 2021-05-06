import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  submitted = false;
  form: FormGroup = new FormGroup({
    type: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    photo: new FormControl(null, Validators.required),
    info: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
    };
  }

}
