import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  product: any;
  loading: boolean = true; // Add a loading indicator

  constructor(private productService: ProductService,private cartService:CartService,private router:Router) {}

  ngOnInit(): void {                           // this ngON IT reuns when page load so that why we calling  the function inside that
    this.productService.getProducts().subscribe((data) => {        /// using Observable in service we receive data from api but if we didn't subscribe that then we didn't receive any data 
      console.log(data); // Check the data in the browser's console
      this.products = data;
      this.loading = false; // Data is loaded
    });
  }

  addToCart(product: any): void {
    // Implement the logic to add the selected product to the cart
    this.cartService.addToCart(product); // Use the CartService to add the product to the cart
  }



    
  





}
