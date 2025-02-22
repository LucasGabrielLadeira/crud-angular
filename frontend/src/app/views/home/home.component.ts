import { Component } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private headerService:HeaderService){
  headerService.headerData = {
    title: 'Início',
    icon: 'home',
    routeUrl: '/'
  }
}

}
