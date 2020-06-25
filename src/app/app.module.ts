import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/home/patient-list/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { PatientListComponent } from './pages/home/patient-list/patient-list.component';
import { ChatComponent } from './pages/home/patient-list/chat/chat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PatientDetailsComponent } from './pages/home/patient-list/patient-details/patient-details.component';
import { ChatHistoricComponent } from './pages/home/patient-list/patient-details/chat-historic/chat-historic.component';
import { SmsEditorComponent } from './pages/home/patient-list/patient-details/sms-editor/sms-editor.component';
import { SmsHistoricComponent } from './pages/home/patient-list/patient-details/sms-historic/sms-historic.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    TableComponent,
    LoginComponent,
    SignUpComponent,
    ChatComponent,
    PatientDetailsComponent,
    ChatHistoricComponent,
    SmsEditorComponent,
    SmsHistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
