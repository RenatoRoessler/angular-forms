import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clienteForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''), 
    })
  })

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log( this.clienteForm.value);
    console.log(`
      Name: ${this.clienteForm.value.firstName},
      Last Name: ${this.clienteForm.value.lastName},
      Name / First Name ${this.clienteForm.value.name.firstName}
    `)
  }

}
