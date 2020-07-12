import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faMapMarkedAlt, faPhone, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //added decorator showing the value is comming from other component
  @Input() user;

  constructor() { }

  ngOnInit(): void {
  }

}
