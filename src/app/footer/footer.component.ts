import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright:String="Copyright@2019 SynergisticIT"
  constructor() { }

  ngOnInit() {
  }

}
