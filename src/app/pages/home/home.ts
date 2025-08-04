import { Component } from '@angular/core';
import { Slider } from "../../core/slider/slider";

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [Slider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
