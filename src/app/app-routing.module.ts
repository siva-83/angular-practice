import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthGuard } from './utils/auth.guard';
import { HomeModule } from './modules/home/home.module';
import { CheckingComponent } from './modules/checkproblem/checking/checking.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"check",component:CheckingComponent},
  {path:"home",
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
