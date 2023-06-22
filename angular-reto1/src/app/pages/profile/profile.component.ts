import { Component } from '@angular/core';
import { User } from "src/app/models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public newUser: User;

  constructor(){
    this.newUser= new User(26, "Inas", "Infantes", "Inass.infantes@gmail.com", "../../../assets/img/sacarosa", "melilla");
  }

  public newDates(name:string, last_name:string, email:string, photo:string){

    this.newUser.name = name;
    this.newUser.last_name = last_name;
    this.newUser.email = email;
    this.newUser.photo = photo;

  }


}
