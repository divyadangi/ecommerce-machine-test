import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount = 0;
  search_query = '';

  constructor(private cartService: CartService, private router: Router, private searchService: SearchService) { }
  

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
 onSearch() {
  this.searchService.setSearch(this.search_query);
}
  openCart() {
    this.router.navigate(['/cart']);
  }
}
