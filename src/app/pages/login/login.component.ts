import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
bgUrl=BG_IMG_URL;

email!:string;
password!:string;
loginService=inject(LoginService);
router=inject(Router);
toastService=inject(ToastrService)

ngOnInit(){
if(this.loginService.isLoggedIn){
  this.router.navigateByUrl('/browse');
  
}
}



onSubmit(){
  //validate email and password
  if(!this.email || !this.password){
    this.toastService.error("please provide an email or password");
  return;
  }
  // email and password are correct
  this.loginService.login(this.email,this.password);
  // after bein logged in, we redirect to the browse page;
  this.toastService.success("logged in successfully");
  this.router.navigateByUrl('/browse');
}




}
