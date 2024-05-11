import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {


  message:string = '';
  isOkay:boolean = true;
  submitted:boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){}
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
    }
  confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = 'Account activated successfully.\nYou can now login to your account.';
        this.submitted = true;
        this.isOkay = true;
      },
      error: (err) => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    })
  }
}
