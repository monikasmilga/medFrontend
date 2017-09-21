import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/users.service';
import {Role} from '../../roles/shared/role';
import {RolesService} from '../../roles/shared/roles.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {slideInOutAnimation} from '../../../animations/slide-in-out.animation';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''},
})

export class UserFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    user: User = new User();
    userRoles: string[] = [];
    roles: Role[] = [];
    showPassword: boolean;

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
            roles: [''],
            password: ['', [
                Validators.required,
            ]]
        });
    }

    ngOnInit() {

        this.rolesService.getRoles().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error)
        );

        var id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];

            this.title = id ? 'Edit User' : 'New user';
            // if(id){
            //   this.title = 'edit user'
            // }else{
            //   this.title = 'new user'
            // }
            if (!id)
                return;

            this.usersService.getUser(id).subscribe(
                user => {
                    this.user = user;
                    for (var i = 0, length = this.user.roles.length; i < length; i++) {
                        this.userRoles.push(this.user.roles[i].id.toString());
                    }
                },
                response => {
                    if (response.status === 404) {
                        this.router.navigate(['Not Found']);
                    }
                });
        });

        if (this.router.url === '/admin/users/new') {
            this.showPassword = true;
        }
    }

    onChange(e: any) {
        console.log(e);
    }

    onSave() {
        var result = this.form.value;
        var user = this.form.value;
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
