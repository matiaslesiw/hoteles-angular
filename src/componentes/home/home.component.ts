import { Component, OnInit } from '@angular/core';
import { Host } from 'src/domain/host';
import { HostServiceService } from 'src/services/HostService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hosts:Host []
  host:Host 
 
  constructor(private hostService: HostServiceService,private router: Router) { }

  async ngOnInit() {
    
     this.hosts = this.hostService.hosts
      
  }

  nuevoAlquiler(id: number){
    this.router.navigate(['hotel/id/alquiler'])

  }

}
