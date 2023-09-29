import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:any[] = [];

  constructor() { }


  addToCart(product:any):void{

    const existingItem = this.cartItems.find((item) => item.id === product.id);    // to check  wheater product is alredy in cart then increase quantity 
    if(existingItem){
      existingItem.quantity++;
    }else{
      this.cartItems.push({...product,quantity:1});
    }


  }

  getCartItems():any[]{
    // implement logic to get cart item 
    return this.cartItems;
  }



  removeItem(index:number):void{
    if(index>=0 && index<this.cartItems.length){
      this.cartItems.splice(index,1);
    }
  }

  clearCart(): void {
    // Implement a method to clear the cart
    this.cartItems = [];
  }


}
