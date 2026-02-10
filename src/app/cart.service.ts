import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cart_items';
  private cartItems: any[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCart();
    }
  }

  private loadCart() {
    const storedCart = localStorage.getItem(this.cartKey);
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.cartCountSubject.next(this.cartItems.length);
  }

  addToCart(product: any) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.cartItems.push(product);
    this.updateStorage();
  }

  removeFromCart(index: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.cartItems.splice(index, 1);
    this.updateStorage();
  }

  getCartItems() {
    return this.cartItems;
  }

  private updateStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
    this.cartCountSubject.next(this.cartItems.length);
  }
}
