import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegsucessComponent } from './registration/regsucess/regsucess.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'register',component:RegistrationComponent,
   },
   {
      path: 'regsucess', // child route path
      component:RegsucessComponent  // child route component that the router renders
    },
    {
      path: 'userlist', 
      component:UserlistComponent 
    },
    {path:'login',component:LoginComponent}
];
