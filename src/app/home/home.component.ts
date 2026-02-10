import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categorie = [
    /* Real Estate */
    {
      name: 'Real Estate',
      tabs: ['All', 'House', 'Land', 'House for rent'],
      products: [
        {
          title: 'Apartment for rent in GLEA CENTRAL',
          price: '$2500 /Month',
          by: 'Flower Real Estate',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/300x200'
        },
        {
          title: 'For Rent DALA GOLDEN RIVER',
          price: 'Price Agreement',
          by: 'Vanguard',
          badge: 'Watch a lot',
          badgeType: 'watch',
          image: 'https://via.placeholder.com/300x200'
        },
        {
          title: 'Apartment for rent in DIAMOND',
          price: '$4505 /Month',
          by: 'Flower Real Estate',
          badge: 'Deal',
          badgeType: 'deal',
          image: 'https://via.placeholder.com/300x200'
        },
        {
          title: 'Apartment in District 10',
          price: '$517.79 /Month',
          by: '247 Real Estate',
          badge: 'Ordered',
          badgeType: 'sold',
          image: 'https://via.placeholder.com/300x200'
        }
      ]
    },

    /* ================= TECHNOLOGY ================= */
    {
      name: 'Technology',
      tabs: ['All', 'Smart Watch', 'Laptop', 'Tablet', 'Desktop', 'Accessories'],
      products: [
        {
          title: 'Apple Macbook Pro 2019 MVV2Z5/A',
          price: '$2,013.54',
          by: 'Co., Ltd Minie Li',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Apple Watch Series 5 MWV62VN/A',
          price: '$517.79',
          by: '24/7 Store',
          badge: 'Favorite',
          badgeType: 'fav',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Apple Macbook Air MWTJ2SA/A',
          price: '$1,099',
          by: 'Kimpine Calculator',
          badge: '-15%',
          badgeType: 'off',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Apple Watch Series 5 MWV62VN/A',
          price: '$193.31',
          by: 'Kimpine Calculator',
          badge: 'Sold Out',
          badgeType: 'sold',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Logitech B175 Wireless Mouse',
          price: '$15.86',
          by: 'Co., Ltd Minie Li',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Apple Macbook Pro 2019 MWP42SA/A',
          price: '$2,013.54',
          by: 'Co., Ltd Flower In',
          image: 'https://via.placeholder.com/150'
        }
      ]
    },

    /* ================= WATCH ================= */
    {
      name: 'Watch',
      tabs: ['All', "Men's Watch", "Women's Watches", 'Smart Watch'],
      products: [
        {
          title: 'Apple Watch Series 5 MWV62VN/A',
          price: '$645.14',
          by: 'Co., Ltd Minie Li',
          badge: '-42%',
          badgeType: 'off',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Hand Watch Rossini 1328W01A',
          price: '$146.71',
          by: 'Co., Ltd SMART MARKETING',
          badge: '-17%',
          badgeType: 'off',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Hand Watch Rossini 5395T01G',
          price: '$183.64',
          by: 'Co., Ltd Minie Li',
          badge: '-5%',
          badgeType: 'off',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Hand Watch Swiss Alpine Military',
          price: '$215.31',
          by: 'Co., Ltd SMART MARKETING',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Watch For Man Larmes LM-FT004',
          price: '$73.01',
          by: 'Mobile World',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Hand Watch For Man Citizen BI5000',
          price: '$66.79',
          by: 'Co., Ltd Minie Li',
          image: 'https://via.placeholder.com/150'
        }
      ]
    },
    /* Cosmetics */
    {
      name: 'Cosmetic',
      tabs: ['All', 'Lotion', 'Mask', 'Perfume'],
      products: [
        {
          title: 'CIC2 Skin Decode Kit',
          price: '$690.30',
          by: 'CO., LTD Baby Girl',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Angel Whitening Treatment Lotion',
          price: '$132.90',
          by: 'CO., LTD Beautiful Face',
          badge: 'Favorite',
          badgeType: 'favorite',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Sunscreen moisturizing intensify',
          price: '$69.04',
          by: 'CO., LTD Baby Girl',
          badge: 'Sold Out',
          badgeType: 'sold',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Anti-allergy serum',
          price: '$132.90',
          by: 'CO., LTD Skincare Cosmetic',
          image: 'https://via.placeholder.com/150'
        }
      ]
    },


    /* Luxury Food */
    {
      name: 'Luxury Food',
      tabs: ['All', 'Drinks', 'Preparation', 'Cereals'],
      products: [
        {
          title: 'Fujiwa alkaline ion drink',
          price: '$32',
          by: 'FUJIWA USA',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Fujiwa alkaline drinking water',
          price: '$2300',
          by: 'FUJIWA USA',
          badge: 'New',
          badgeType: 'new',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Pure Kim Non Tapioca Flour',
          price: '$58',
          by: 'Gesun Investment',
          image: 'https://via.placeholder.com/150'
        },
        {
          title: 'Oak Wine',
          price: '$5179',
          by: 'Gesun Investment',
          image: 'https://via.placeholder.com/150'
        }
      ]
    }

  ];
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];

  activeCategory: string = 'All';
  searchTerm: string = '';

  constructor(private api: ApiService, private cartService: CartService, private searchService: SearchService) { }
  selectedCategory = 'Technology';

  selectCategory(name: string) {
    this.selectedCategory = name;
  }
  ngOnInit(): void {
    this.api.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.searchService.searchQuery$
        .pipe(debounceTime(300))
      this.searchService.searchQuery$
        .pipe(debounceTime(300))
        .subscribe(query => {
          console.log(query);
          if (query) {
            this.products = data?.filter(item =>
              item?.title?.toLowerCase().includes(query.toLowerCase())
            );
            console.log(this.products);
          }
        });


      this.categories = ['All', ...new Set(data.map((p: any) => p.category))];
    });
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    this.applyFilters();
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }

  // applyFilters() {
  //   this.filteredProducts = this.products.filter(product => {

  //     const matchCategory =
  //       this.activeCategory === 'All' ||
  //       product.category === this.activeCategory;

  //     const matchSearch =
  //       product.title.toLowerCase().includes(this.searchTerm) ||
  //       product.category.toLowerCase().includes(this.searchTerm);

  //     return matchCategory && matchSearch;
  //   });
  // }
  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchCategory = this.activeCategory === 'All' || product.category === this.activeCategory;
      const matchSearch = !this.searchTerm ||
        product.title.toLowerCase().includes(this.searchTerm) ||
        product.category.toLowerCase().includes(this.searchTerm);
      return matchCategory && matchSearch;
    });
  }

  cartItem(product: any) {
    this.cartService.addToCart(product);
  }

}
