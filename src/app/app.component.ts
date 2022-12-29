import { Component } from '@angular/core';
/* import { FormControl,FormGroup, Validators } from '@angular/forms' */
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titlesItems = [
    'Техподдержка',
    'Продажи',
    'Другое',
    'Еще один пункт'
  ];

  submitForm(formName: NgForm){

  }
  /* myForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    topic: new FormControl(''),
    message: new FormControl('')
  })

  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get tel() { return this.myForm.get('tel'); } */

  /* submitForm(){
    console.log(this.myForm);
  } */
}
