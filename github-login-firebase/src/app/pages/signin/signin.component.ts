import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    
    const {email} = f.form.value;
    const password = f.controls['password'].value;

    //TODO: do your checking here 

    this.auth.signIn(email,password)
    .then((res) => {
      this.router.navigateByUrl('/');
      this.toastr.success('SignIn Success');
    })
    .catch((err)=>{
      console.log(err.message);
      this.toastr.error('signIn failed');
    })

  }


}
