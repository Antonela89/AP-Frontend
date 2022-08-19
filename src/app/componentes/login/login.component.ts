import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario!: string;
  password!: string;
  isLogged = environment.isLogged;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMsj!: string;

  Usuario = document.getElementById('nombreUsuario');
  Password = document.getElementById('password');




  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(event: Event): void {
    event.preventDefault;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
      this.authService.login(this.loginUsuario).subscribe({next: data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, error: err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }})
    }
  }
