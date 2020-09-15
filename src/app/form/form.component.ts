import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  user={
    username:'',
    email:'',
    phone:'',
    password:'',
    password2:'',

  }
  userPattern=/^[A-Za-z\s]+$/;
  emailPattern =/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  phonePattern=/(09|03[2|4|5|7|6|8|9])+([0-9]{7})\b/;

}
