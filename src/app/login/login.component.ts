import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  mylogform! : FormGroup;

constructor(private fb:FormBuilder,private rout:Router){

}
ngOnInit(){
  this.mylogform=this.fb.group({
    email:[''],
    psw:['']
  })
}


  onSubmit(){

    console.log(this.mylogform.value.email);
    console.log(this.mylogform.value.psw);
   
   if(this.mylogform.valid){
    // alert("you are registered!!");
    // this.user.insertStd(this.myform.value).subscribe(
    //   response=>{
    //     console.log('Data inserted successfully:', response);
        this.rout.navigate(['/regsucess'],{state:{data:this.mylogform.value}});
        
   }
  
   else{
    alert("please enter valid email and password!!");
    this.mylogform.reset();
   }
   
   
   }
  }

