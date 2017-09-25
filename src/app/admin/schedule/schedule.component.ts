import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/shared/users.service";
import {User} from "../users/shared/user";
import {fadeInAnimation} from "../../animations/fade-in.animation";
import {Subscription} from "rxjs";
import {AppService} from "../../shared/app.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''},
})
export class ScheduleComponent implements OnInit {

  public users: User[] = [];

  subscription: Subscription;

  constructor(private usersService: UsersService, private appService: AppService) { }

  ngOnInit() {
    return this.usersService.getUsers().subscribe(
        users => this.users = users,
        (error: Response) => console.log(error)
    );
  }

}

