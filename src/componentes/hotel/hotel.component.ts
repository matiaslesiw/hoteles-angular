import { Component, OnInit, Input } from '@angular/core';
import { Host } from 'src/domain/host';
import { HostServiceService } from 'src/services/HostService.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  @Input() host:Host 
  hosts:Host []
  
  constructor() { }

  ngOnInit() {}
  
  dorado(val: number) {
    if (val<=this.host.clasificacion){
      return 'dorado'
    }
  
  }

 

}
