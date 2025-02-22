import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from '../../components/template/header/header.service';
@Component({
  selector: 'app-product-crud',
  standalone: false,
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {
  ngOnInit(): void {
      
  }
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']);
  }

  constructor(
    private router:Router,
    private headerService:HeaderService
  ){
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'home',
      routeUrl: '/products'
    }
  }

}
