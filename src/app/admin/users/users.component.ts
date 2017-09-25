import {Component, OnInit} from '@angular/core';
import {User} from './shared/user';
import {UsersService} from './shared/users.service';
import {fadeInAnimation} from '../../animations/fade-in.animation';
import {AppService} from '../../shared/app.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
})

export class UsersComponent implements OnInit {

    public users: User[] = [];

    subscription: Subscription;

    constructor(private usersService: UsersService, private appService: AppService) {
    }

    ngOnInit() {
        this.loadUsers();

        this.subscription = this.appService.on('users-updated')
            .subscribe(
                () => this.loadUsers()
            );
    }

    loadUsers() {
        return this.usersService.getUsers().subscribe(
            users => this.users = users,
            (error: Response) => console.log(error)
        );
    }

    onDelete(user) {
        if (confirm('Are you sure you want to delete ' + user.first_name + '?')) {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.usersService.deleteUser(user.id)
                .subscribe(null,
                    error => {
                        alert('Could not delete user.');
                        this.users.splice(index, 0, user);
                    });
        }
    }
}
