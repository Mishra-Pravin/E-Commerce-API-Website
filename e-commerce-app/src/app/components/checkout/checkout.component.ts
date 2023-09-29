import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartItems: any[] = [];
  shippingInfo: any = { name: '', address: '' }; // Initialize an empty shippingInfo object

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalPrice(): number {
    // Calculate the total price of items in the cart
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  placeOrder(): void {
    // Implement the logic to place the order
    // This could include payment processing, order confirmation, etc.
    
    // Access shippingInfo to get shipping details
    console.log('Shipping Information:', this.shippingInfo);

    // For this example, we'll simply clear the cart and show a confirmation message
    this.cartService.clearCart();
    this.cartItems = [];
    
    // Show a confirmation message
    alert('Order placed successfully!');
  }
}
