import { Component } from '@angular/core';

interface Menu {
  data: string;
  route: string;
  imgPath: string;
}

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
  selector: 'app-bescom-dashboard',
  templateUrl: './bescom-dashboard.component.html',
  styleUrls: ['./bescom-dashboard.component.scss']
})
export class BescomDashboardComponent {
  navData: any = navData;
}
