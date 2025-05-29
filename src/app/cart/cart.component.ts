import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  constructor(private cartService: CartService, private router: Router,) {}
  

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  buyNow() {
    if (this.cartItems.length > 0) {
      const productNames = this.cartItems.map(item => item.name).join(', ');
      this.router.navigate(['/pages'], {
        state: { productorder: productNames }, 
      });
    }
}
}


