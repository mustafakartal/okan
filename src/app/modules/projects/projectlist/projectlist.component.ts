import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  PageTitle = 'Proje Listesi';
  AddNewButtonText = 'Yeni Proje';
  NoDataFound = 'Proje Kaydı Bulunamadı!';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Add() {
this.router.navigate(['/projeler/yeni'])
  }

}
