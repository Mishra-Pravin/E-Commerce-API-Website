import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id']; // Get the product ID from the route parameter
      this.productService.getProducts().subscribe((products: any[]) => { // Specify the type of 'products' as 'any[]'
        this.product = products.find((p: any) => p.id === productId); // Specify the type of 'p' as 'any'
      });
    });
  }

  addToCart(product: any): void {
    // Implement the logic to add the selected product to the cart
    this.cartService.addToCart(product); // Use the CartService to add the product to the cart
  }
}