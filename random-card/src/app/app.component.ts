import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'random-card';
  // instead of using any we can create an interface and use that also
  user : any;

  constructor(
              private userService : UserService, 
              private toastr: ToastrService, 
              
             ){ }

  ngOnInit(){
    this.userService.getUser().subscribe(
      (user :any) => {
        console.log(user);
        this.user = user.results[2];
      },
      (err)=>{
        this.toastr.error(err.status, "OOPs");
      },
    )
  }
}
