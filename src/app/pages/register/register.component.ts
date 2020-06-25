import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Doctor = new Doctor();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.identifiant === 'toto') {
      this.router.navigate(['home']);
    } else {
      alert('Identifiants incorrects');
    }
  }

}
