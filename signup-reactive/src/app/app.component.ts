import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registerForm : FormGroup;
  submitted : boolean;

  constructor(private  formBuilder : FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      //['holds default value', hold the pre build validations]
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',Validators.required, Validators.email],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
      acceptTandC : [false, Validators.requiredTrue]
    },{
      validators: PasswordChecker('password','confirmPassword')
    });

  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Success Signup\n" + JSON.stringify(this.registerForm.value));
  }
  onReset(){
     this.submitted = false;
     this.registerForm.reset();
  }  

}
