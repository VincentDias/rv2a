import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { PatientListComponent } from './pages/home/patient-list/patient-list.component';
import { ChatComponent } from './pages/home/patient-list/chat/chat.component';
import { PatientDetailsComponent } from './pages/home/patient-list/patient-details/patient-details.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: PatientListComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'details', component: PatientDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
