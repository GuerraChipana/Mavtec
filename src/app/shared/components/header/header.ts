import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Login } from "../../../auth/login/login";

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, Navbar, Login],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
