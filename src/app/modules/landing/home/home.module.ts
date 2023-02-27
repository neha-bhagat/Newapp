import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { BescomDashboardComponent } from '../BESCOM/bescom-dashboard/bescom-dashboard.component';
import { BescomSidenavComponent } from '../BESCOM/bescom-dashboard/components/bescom-sidenav/bescom-sidenav.component';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { LayoutModule } from 'app/layout/layout.module';
import { SidenavComponent } from '../BESCOM/bescom-dashboard/components/sidenav/sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgMarqueeModule } from 'ng-marquee';

@NgModule({
    declarations: [
        LandingHomeComponent,
        BescomDashboardComponent,
        BescomSidenavComponent,
        SidenavComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        LanguagesModule,
        NgbDropdownModule,
        TranslateModule,
        NgMarqueeModule
    ],
    schemas:[]
})
export class LandingHomeModule
{
}
