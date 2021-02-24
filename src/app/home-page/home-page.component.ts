import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service : CommonService) { }

  public data ;
  public defaultData ;
  public zoneData;
  ngOnInit(): void {

    this.data = this.service.fetchData();
    this.defaultData = this.data.default.comfortData;
  }

  getData(id) {
    this.defaultData = this.data.default.zones[id].comfortData;
    console.log(this.defaultData)


  }



}
