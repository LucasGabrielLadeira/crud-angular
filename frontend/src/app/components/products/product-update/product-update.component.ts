import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  standalone: false,
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})

export class ProductUpdateComponent implements OnInit{
  product: Product = {
    name: '',
    price: 0.0,
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readByID(id).subscribe(product => {
        this.product = product;
      });
    }
    
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(
      () => {
        this.productService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['/products']);
      }
    )
  }
  
  cancel(){
    this.router.navigate(['/products']);
  }

}
