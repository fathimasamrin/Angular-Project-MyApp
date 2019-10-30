import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  

  City: any = ['Goa', 'Manali','Delhi','Rajasthan']
  

  constructor(private authservice:AuthService,private router:Router, private formbuilder:FormBuilder) { }
  
  isSubmitted =false;
  reservationForm:FormGroup;

  ngOnInit() {
    this.reservationForm=this.formbuilder.group({
      //email:['',Validators.required],
     email: ['', Validators.compose([Validators.required, Validators.email])],
     //password:['',Validators.required]
     firstname:['',Validators.required],
     cityName: ['', [Validators.required]],
     number:['',Validators.required,Validators.pattern('^[0-9]+$')]
    });

  }

  get formControls()
    {
      return this.reservationForm.controls;
    }

    public logout()
    {
      this.authservice.logout();
      this.router.navigateByUrl('/login');
    }

    reservesubmit()
    {
      this.isSubmitted=true;
      if(this.reservationForm.invalid)
      {
        return false;
      }
      else{
        console.log("Submitted successfully");
      }

      
    }
    // Choose city using select dropdown
  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get cityName() {
    return this.reservationForm.get('cityName');
  }

}
