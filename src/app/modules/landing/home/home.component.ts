import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import {TranslateService} from "@ngx-translate/core";
import { timer, finalize, takeWhile, takeUntil, tap, Subject } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
interface Menu {
  data: string;
  route: string;
  imgPath: string;
}
declare var bootstrap: any;
const navData: Menu[] = [
    {
      data: 'Asset & Maintenance Management',
      route: '',
      imgPath: 'assets/dashboard-imgs/administration.png',
    },
    {
      data: 'Bl-Publisher',
      route: '',
      imgPath: 'assets/dashboard-imgs/report.png',
    },
    {
      data: 'Customer Relationship, Metering Billing & Collection',
      route: '',
      imgPath: 'assets/dashboard-imgs/query.png',
    },
    {
      data: 'Document Repository',
      route: '',
      imgPath: 'assets/dashboard-imgs/mask.png',
    },
    {
      data: 'Geographical Information System',
      route: '',
      imgPath: 'assets/dashboard-imgs/routing.png',
    },
    {
      data: 'GIS Viewer',
      route: '',
      imgPath: 'assets/dashboard-imgs/analysis.png',
    },
    {
      data: 'Identify Management System',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Meter Data Acquisition',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Meter Data Acquisition AMI',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Meter Data Management & Energy Audit',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Management Information System',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Karnataka R-APDRP Program Implementation Status',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
    {
      data: 'Search FAQ',
      route: '',
      imgPath: 'assets/dashboard-imgs/editing.png',
    },
  ];
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements AfterViewInit,OnInit{
  @ViewChild('navdrop', { static: true}) navdrop: ElementRef;

    close:boolean = false
    countdown: number = 5;
    navData: any = navData;
    user :any ={};
    title:string;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private translate: TranslateService,private elementRef:ElementRef,public router:Router,private _authService:AuthService,private readonly keycloak: KeycloakService)
    {
      translate.setDefaultLang('en');
      translate.use('en');
    }

    useLanguage(language: string) {
      this.translate.use(language);
    }
    
    dropClick() {
      this.navdrop.nativeElement.classList.toggle("show");
    }

    ngOnInit(){
      return;
      this.user  = JSON.parse( localStorage.getItem('user'));
      this.user.id.split('-').length
      this.setTitleImage(this.user.username)
    }
    logout(){
        // // Sign out
        this.router.ngOnDestroy();
        window.location.href = 'https://10.5.100.144:14101/oam/server/logout'

        // localStorage.clear();
        // this.keycloak.logout().then(()=>{
        //     this.keycloak.clearToken();
        // });

        // // let redirecturl:'https://10.5.100.144:14101/oam/server/logout'
        // this._authService.signOut();
        // this.keycloak.logout('/signed-in-redirect').then(()=>{
        //     const redirectURL =  '/signed-in-redirect';
        //             // Navigate to the redirect url
        //             this.router.navigateByUrl(redirectURL);
        // });

        // // // Redirect after the countdown
        // timer(1000, 1000)
        //     .pipe(
        //         finalize(() => {
        //             this.router.navigate(['sign-in']);
        //         }),
        //         takeWhile(() => this.countdown > 0),
        //         takeUntil(this._unsubscribeAll),
        //         tap(() => this.countdown--)
        //     )
        //     .subscribe();
        }
    setTitleImage(value){
        switch (value) {
            case 'avinash.c':
                // this.imageurl='assets/logo.svg',
                this.title='BESCOM'
                break;
            case 'rohan.khan':
                // this.imageurl='assets/CESC-logo.png',
                this.title='CESC'
                break;
            case 'gescom.admin':
                // this.imageurl='assets/GESCOM-logo.png',
                this.title='GESCOM'
                break;
            case 'hescom.admin':
                // this.imageurl='assets/hescom-logo.png',
                this.title='HESCOM'
                break;
            case 'mescom.admin':
                // this.imageurl='assets/MESCOM-logo.png',
                this.title='MESCOM'
                break;
            default:
                // this.imageurl='assets/logo.svg',
                this.title='BESCOM'
                break;
        }
      }
    ngAfterViewInit() {
        var v = document.createElement("script");
        v.type = "text/javascript";
        v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
        this.elementRef.nativeElement.appendChild(v);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        this.elementRef.nativeElement.appendChild(s);
    }
    navclose(){
        this.close = !this.close
    }
}
