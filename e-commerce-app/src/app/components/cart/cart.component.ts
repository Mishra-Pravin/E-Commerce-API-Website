import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService,private router:Router) {
    this.cartItems = this.cartService.getCartItems(); // Initialize cartItems in the constructor
  }

  decreaseQuantity(item: any): void {
    console.log('Decreasing quantity for item', item);
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any): void {
    console.log('Increasing quantity for item', item);
    item.quantity++;
  }

  calculateTotalPrice(): number {
    console.log('Calculating total price');
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // removing and item from cart 

  removeItem(index:number):void{
    this.cartService.removeItem(index);
  }

  
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }


  checkout(): void {
    // Navigate to the Checkout component
    this.router.navigate(['/checkout']);
  }

  
}