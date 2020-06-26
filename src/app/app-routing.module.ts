import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './pages/home/patient-list/patient-list.component';
import { ChatComponent } from './pages/home/patient-list/chat/chat.component';
import { PatientDetailsComponent } from './pages/home/patient-list/patient-details/patient-details.component';


const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'home', component: PatientListComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'details', component: PatientDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
