import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { Subject, timer, finalize, takeWhile, takeUntil, tap } from 'rxjs';
interface Menu {
    data: string;
    route: string;
    imgPath: string;
  }

  const navData: Menu[] = [
    {
      data: 'Dashboard',
      route: '',
      imgPath: 'assets/1.svg',
    },
    {
      data: 'Useful links',
      route: '',
      imgPath: 'assets/2.svg',
    },
    {
      data: 'useful Contacts',
      route: '',
      imgPath: 'assets/3.svg',
    },
    {
      data: 'Search Employee',
      route: '',
      imgPath: 'assets/4.svg',
    },
    {
      data: 'Bescom Zones',
      route: '',
      imgPath: 'assets/5.svg',
    },
    {
      data: 'Alerts',
      route: '',
      imgPath: 'assets/6.svg',
    },
  //   {
  //     data: 'GIS Viewer',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/analysis.png',
  //   },
  //   {
  //     data: 'Identify Management System',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Meter Data Acquisition',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Meter Data Acquisition AMI',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Meter Data Management & Energy Audit',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Management Information System',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Karnataka R-APDRP Program Implementation Status',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  //   {
  //     data: 'Search FAQ',
  //     route: '',
  //     imgPath: 'assets/dashboard-imgs/editing.png',
  //   },
  ];
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
    countdown: number = 5;
    imageurl:string;
    title:string;
    user:any
    count:any
    countdownMapping: any = {
        '=1'   : '# second',
        'other': '# seconds'
    };
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(public router:Router,
      private _authService: AuthService,
      private readonly keycloak: KeycloakService)
    {
      this.user  = JSON.parse( localStorage.getItem('user'));
      // this.count = this.user.id.split('-').length;
      this.setTitleImage(this.user.username)
    }
    ngOnInit() {
        return 'any'
        throw new Error('Method not implemented.');
    }
    navData: any = navData;

    logout(){
    // Sign out
    this.keycloak.logout();
    localStorage.clear();
    this._authService.signOut();

    // Redirect after the countdown
    timer(1000, 1000)
        .pipe(
            finalize(() => {
                this.router.navigate(['sign-in']);
            }),
            takeWhile(() => this.countdown > 0),
            takeUntil(this._unsubscribeAll),
            tap(() => this.countdown--)
        )
        .subscribe();
    }

  //   Username: ROHAN.KHAN

  // Password: India@1234

  // Organization: CESC | Organization Attribute value in SAML token will be 6 for CESC



  // Username: GESCOM.ADMIN

  // Password: India@1234

  // Organization: GESCOM | Organization Attribute value in SAML token will be 7 for GESCOM



  // Username: HESCOM.ADMIN

  // Password: India@1234

  // Organization: HESCOM| Organization Attribute value in SAML token will be 8 for HESCOM



  // Username: HESCOM.ADMIN

  // Password: India@1234

  // Organization: MESCOM| Organization Attribute value in SAML token will be 9 for HESCOM
    setTitleImage(value){
      switch (value) {

          case 'avinash.c':
              this.imageurl='assets/logo.svg',
              this.title='BESCOM'
              break;
          case 'rohan.khan':
              this.imageurl='assets/CESC-logo.png',
              this.title='CESC'
              break;
          case 'gescom.admin':
              this.imageurl='assets/GESCOM-logo.png',
              this.title='GESCOM'
              break;
          case 'hescom.admin':
              this.imageurl='assets/hescom-logo.png',
              this.title='HESCOM'
              break;
          case 'mescom.admin':
              this.imageurl='assets/MESCOM-logo.png',
              this.title='MESCOM'
              break;
          default:
              this.imageurl='assets/logo.svg',
              this.title='BESCOM'
              break;
      }
    }
  }
