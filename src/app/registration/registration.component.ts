import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  
  myform!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private user:UsersService){

  }
 ngOnInit(){
   this.myform=this.fb.group({
    uname: [''],
    phn: [''],
    email:[''],
    psw:['']
   });
 }

   onSubmit() {
    
    console.log(this.myform.value.uname);
    console.log(this.myform.value.phn);
   console.log(this.myform.value.email);
   console.log(this.myform.value.psw);
   if(this.myform.valid){
    alert("you are registered!!");
    this.user.insertStd(this.myform.value).subscribe(
      response=>{
        console.log('Data inserted successfully:', response);
        this.router.navigate(['/regsucess'],{state:{data:this.myform.value}});
        
   }
  )}
   else{
    alert("something went wrong!!");
    this.myform.reset();
   }
   
   
   }
}
