import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent  {
 cartItems: any[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('cart_items');
    if (data) {
      this.cartItems = JSON.parse(data);
    }
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
  }

  get totalPrice() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
}
