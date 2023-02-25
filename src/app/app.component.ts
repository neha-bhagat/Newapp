import { Component,OnInit } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{

    public isLoggedIn = false;
    public userProfile: KeycloakProfile | null = null;

    /**
     * Constructor
     */
    constructor(private readonly keycloak: KeycloakService)
    {
    }

    public async ngOnInit() {
        this.isLoggedIn = await this.keycloak.isLoggedIn();

        type userRoles = Array<{id: number, text: string}>;

        if (this.isLoggedIn)
        {
            this.userProfile = await this.keycloak.loadUserProfile();
        }
    }

    public initiateSession() {
        this.keycloak.login();
    }

    public endSession() {
        this.keycloak.logout();
    }
}
