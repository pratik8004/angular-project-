import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgFor,MatButton,MatIcon,MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      name: "iPhone-15",
      price: 69000,
      color: "Rose Pink",
      imageUrl: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258&width=1680"
    },
    {
      name: "Victus Laptop",
      price: 75000,
      color: "Mat-Blue",
      imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08911747.png?imwidth=270&imdensity=1&impolicy=Png_Res"
    },
    {
      name: "Boat-Rockez",
      price: 3000,
      color: "Aqua",
      imageUrl: "https://www.boat-lifestyle.com/cdn/shop/products/main-img-2_600x.png?v=1616562632"
    },
    {
      name: "Galexy-Watch",
      price: 35000,
      color: "pearl white",
      imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch7-l310-sm-l310nzsains-542366980?$684_547_PNG$"
    },
    {
      name: "Sony Smart-Tv",
      price: 140000,
      color: "mat-Black",
      imageUrl: "https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/television/t/q/3/-original-imageh4cmprngshg.jpeg?q=90&crop=false"
    },
    {
      name: "Samsung S23",
      price: 45000,
      color: "Gold",
      imageUrl: "https://m.media-amazon.com/images/I/71ez69tPl4L._SL1500_.jpg"
    },
    
  ];
  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart successfully!');
}
  
  
 
}

