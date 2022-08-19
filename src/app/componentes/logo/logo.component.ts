import { Component, OnInit } from '@angular/core';
import {} from '@angular/animations';
import {TokenService} from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  animations: []
})
export class LogoComponent implements OnInit {
  isLogged = environment.isLogged;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(e: Event): void {
    e.defaultPrevented;
    this.tokenService.logOut();
    window.location.reload();
  }
}
