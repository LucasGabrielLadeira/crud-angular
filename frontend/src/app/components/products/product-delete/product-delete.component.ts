import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  standalone: false,
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css',
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.readByID(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  deleteProduct() {
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage('Produto deletado com sucesso');
        this.router.navigate(['/products']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
