import { Component, OnInit,Input } from '@angular/core';
import { AppConfig } from '../config/app.config';

@Component({
  selector: 'showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowimageComponent implements OnInit {
  @Input("imageid")
  public imageid:String;
  public IMAGE_BASE_URI=AppConfig.IMAGE_BASE_URI;
  constructor() { }

  ngOnInit() {
  }

}
