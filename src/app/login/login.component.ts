import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators}from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Loginuser} from '../loginuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router,private formbuilder:FormBuilder)
   { }
  
  loginForm:FormGroup;
  isSubmitted=false;
  loginuser:Loginuser
  ngOnInit()
   {
      this.loginForm=this.formbuilder.group({
        //email:['',Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.required]
      });
    }

    get formControls()
    {
      return this.loginForm.controls;
    }

    login()
    { 
     
      console.log(this.loginForm.value);
    
      this.isSubmitted  =true;
      if(this.loginForm.invalid)
      {
       alert('User form is not valid!!')
        return;
      }
      
       
      
       
    else
      {
       //alert('User form is valid!!')
       
        this.authservice.login(this.loginForm.value).subscribe(
          data =>
          {
            this.loginuser = data;
            console.log(data);
            console.log(data.email);

            if(data.email !=null)
            {
              this.isSubmitted=true;
               this.router.navigateByUrl('/admin');
            }
            else
            {
              window.alert("wrong username or password");
            }
          }
        );
       
       
       }
       
      
    }
  


}
