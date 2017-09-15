import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RolesService} from '../shared/roles.service';
import {Role} from '../shared/role';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    role: Role = new Role();

    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private rolesService: RolesService, ) {
        this.form = formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
        });
    }

    ngOnInit() {
        const id = this.activatedRoute.params.subscribe(params => {
            let id = params['id'];

            this.title = id ? 'Edit role' : 'New role';

            if (!id)
                return;

            this.rolesService.getRole(id)
                .subscribe(
                    role => this.role = role,
                    response => {
                if (response.status === 404) {
                    this.router.navigate(['Not Found']);
                }
            });
        });
    }

    onSave() {
        var result, role = this.form.value;
        if (this.role.id) {
            role.id = this.role.id;
            result = this.rolesService.updateRole(role);
        } else {
            result = this.rolesService.createRole(role);
        }

        result.subscribe(
            role => this.router.navigate(['admin/roles']),
            error => console.log(error)
        );
    }
}