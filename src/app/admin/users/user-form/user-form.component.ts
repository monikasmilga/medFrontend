import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/users.service';
import {Role} from "../../roles/shared/role";
import {RolesService} from "../../roles/shared/roles.service";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    user: User = new User();
    showPassword: boolean;
    public roles: Role[] = [];

    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService,
                private rolesService: RolesService) {

        this.form = formBuilder.group({
            first_name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            last_name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            position: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            email: ['', [
                Validators.required,
            ]],
            role_id: [''],
            password: ['', [
                Validators.required,
            ]]
        });
    }

    ngOnInit() {
        const id = this.activatedRoute.params.subscribe(params => {
            const id = params['id'];

            this.title = id ? 'Edit User' : 'New user';
            // if(id){
            //   this.title = 'edit user'
            // }else{
            //   this.title = 'new user'
            // }
            if (!id)
                return;

            this.usersService.getUser(id).subscribe(user => this.user = user, response => {
                if (response.status === 404) {
                    this.router.navigate(['Not Found']);
                }
            });
        });

        if (this.router.url === '/admin/users/new') {
            this.showPassword = true;
        }
    }

    onSave() {
        var result, user = this.form.value;
        if (this.user.id) {
            user.id = this.user.id;
            result = this.usersService.updateUser(user);
        } else {
            result = this.usersService.createUser(user);
        }

        result.subscribe(
            user => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }

}
