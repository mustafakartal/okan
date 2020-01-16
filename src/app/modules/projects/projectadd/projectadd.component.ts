import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.css']
})
export class ProjectaddComponent implements OnInit {

  PageTitle = 'Yeni Proje';
  SubmitButtonText = 'Kaydet';

  constructor() { }

  ngOnInit() {
  }

}
