import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  reservation()
  {
    this.authService.logout();
    this.router.navigateByUrl('/reservation');
  }

}
