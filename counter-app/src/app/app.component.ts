import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  //normal Functions
  handleIncrease(){
    if(this.count < 10){
      this.count = this.count + 1;
    }else{
      alert("can't be greater than 10");
    }
  }
  //Arrow Functions 
  handleDecrease = () =>{
    if(this.count > 0){
      this.count = this.count -1;
    }else{
      alert("can't be less than 0");
    }
  }

  handleReset = () =>{
    this.count = 0;
  }
}
