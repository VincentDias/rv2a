import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './pages/home/patient-list/chat/chat.component';
import { PatientDetailsComponent } from './pages/home/patient-list/patient-details/patient-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './pages/home/patient-list/table/table.component';



const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: TableComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'detail/:id', component: PatientDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
