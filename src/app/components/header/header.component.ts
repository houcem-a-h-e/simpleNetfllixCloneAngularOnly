import { Component, inject } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { environment } from '../../environment/environment';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  check=environment.loggedin;
logoUrl=LOGO_URL;
loginService=inject(LoginService);
router=inject(Router);
onLogout(){
  console.log("heeey");
  this.loginService.logout();
  environment.loggedin=false;
  this.router.navigateByUrl('/login');
}

}
