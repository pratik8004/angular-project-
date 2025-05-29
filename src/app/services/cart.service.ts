import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];

  constructor() { }
  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // If already in cart, increase quantity
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    console.log("Cart Updated:", this.cart);
  }

  getCartItems() {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }

}
