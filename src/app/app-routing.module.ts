import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginDataComponent} from './login-data/login-data.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
 



const routes: Routes = [
     { path: '',pathMatch: 'full',component:LoginPageComponent},
    { path:'app', component: LoginPageComponent},
    {path:'HomePage',component:LoginDataComponent ,canActivate:[AuthGuardServiceService]},
    {path:'logout',component:LoginPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
